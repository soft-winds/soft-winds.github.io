[[toc]]

# NestJS 文件上传模块

## 文件上传配置

### 1. 安装依赖

```bash
# 安装文件上传相关依赖
npm install @nestjs/platform-express multer
npm install -D @types/multer
```

### 2. 配置文件上传

创建 `src/config/multer.config.ts`：

```typescript
import { diskStorage } from "multer";
import { extname } from "path";
import { v4 as uuidv4 } from "uuid";

export const multerConfig = {
  storage: diskStorage({
    destination: "./uploads",
    filename: (req, file, callback) => {
      const uniqueSuffix = uuidv4();
      const ext = extname(file.originalname);
      callback(null, `${uniqueSuffix}${ext}`);
    },
  }),
  fileFilter: (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return callback(new Error("只允许上传图片文件！"), false);
    }
    callback(null, true);
  },
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
};
```

## 图片模块实现

### 1. 图片实体

创建 `src/modules/photo/entities/photo.entity.ts`：

```typescript
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity("photos")
export class Photo {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  filename: string;

  @Column()
  originalname: string;

  @Column()
  mimetype: string;

  @Column()
  size: number;

  @Column()
  path: string;

  @Column({ default: false })
  isPublic: boolean;

  @ManyToOne(() => User, (user) => user.photos)
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
```

### 2. 图片服务

创建 `src/modules/photo/photo.service.ts`：

```typescript
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Photo } from "./entities/photo.entity";
import { CreatePhotoDto } from "./dto/create-photo.dto";
import { UpdatePhotoDto } from "./dto/update-photo.dto";
import { User } from "../user/entities/user.entity";

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>
  ) {}

  async create(createPhotoDto: CreatePhotoDto, user: User): Promise<Photo> {
    const photo = this.photoRepository.create({
      ...createPhotoDto,
      user,
    });
    return this.photoRepository.save(photo);
  }

  async findAll(user: User): Promise<Photo[]> {
    return this.photoRepository.find({
      where: [{ user: { id: user.id } }, { isPublic: true }],
      relations: ["user"],
    });
  }

  async findOne(id: string, user: User): Promise<Photo> {
    const photo = await this.photoRepository.findOne({
      where: [
        { id, user: { id: user.id } },
        { id, isPublic: true },
      ],
      relations: ["user"],
    });

    if (!photo) {
      throw new NotFoundException("图片不存在");
    }

    return photo;
  }

  async update(
    id: string,
    updatePhotoDto: UpdatePhotoDto,
    user: User
  ): Promise<Photo> {
    const photo = await this.findOne(id, user);
    Object.assign(photo, updatePhotoDto);
    return this.photoRepository.save(photo);
  }

  async remove(id: string, user: User): Promise<void> {
    const photo = await this.findOne(id, user);
    await this.photoRepository.remove(photo);
  }
}
```

### 3. 图片控制器

创建 `src/modules/photo/photo.controller.ts`：

```typescript
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Request,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { PhotoService } from "./photo.service";
import { CreatePhotoDto } from "./dto/create-photo.dto";
import { UpdatePhotoDto } from "./dto/update-photo.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { multerConfig } from "../../config/multer.config";
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiConsumes,
} from "@nestjs/swagger";

@ApiTags("图片管理")
@Controller("photos")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Post("upload")
  @UseInterceptors(FileInterceptor("file", multerConfig))
  @ApiConsumes("multipart/form-data")
  @ApiOperation({ summary: "上传图片" })
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Request() req) {
    const createPhotoDto: CreatePhotoDto = {
      filename: file.filename,
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      path: file.path,
    };
    return this.photoService.create(createPhotoDto, req.user);
  }

  @Get()
  @ApiOperation({ summary: "获取图片列表" })
  findAll(@Request() req) {
    return this.photoService.findAll(req.user);
  }

  @Get(":id")
  @ApiOperation({ summary: "获取指定图片" })
  findOne(@Param("id") id: string, @Request() req) {
    return this.photoService.findOne(id, req.user);
  }

  @Patch(":id")
  @ApiOperation({ summary: "更新图片信息" })
  update(
    @Param("id") id: string,
    @Body() updatePhotoDto: UpdatePhotoDto,
    @Request() req
  ) {
    return this.photoService.update(id, updatePhotoDto, req.user);
  }

  @Delete(":id")
  @ApiOperation({ summary: "删除图片" })
  remove(@Param("id") id: string, @Request() req) {
    return this.photoService.remove(id, req.user);
  }
}
```

## 图片处理服务

### 1. 安装图片处理依赖

```bash
npm install sharp
```

### 2. 创建图片处理服务

创建 `src/modules/photo/photo-processor.service.ts`：

```typescript
import { Injectable } from "@nestjs/common";
import * as sharp from "sharp";
import { join } from "path";

@Injectable()
export class PhotoProcessorService {
  async resizeImage(file: Express.Multer.File, width: number, height: number) {
    const filename = file.filename;
    const filePath = join(process.cwd(), "uploads", filename);
    const outputPath = join(process.cwd(), "uploads", `resized-${filename}`);

    await sharp(filePath).resize(width, height).toFile(outputPath);

    return {
      filename: `resized-${filename}`,
      path: outputPath,
    };
  }

  async compressImage(file: Express.Multer.File, quality: number) {
    const filename = file.filename;
    const filePath = join(process.cwd(), "uploads", filename);
    const outputPath = join(process.cwd(), "uploads", `compressed-${filename}`);

    await sharp(filePath).jpeg({ quality }).toFile(outputPath);

    return {
      filename: `compressed-${filename}`,
      path: outputPath,
    };
  }

  async generateThumbnail(file: Express.Multer.File) {
    const filename = file.filename;
    const filePath = join(process.cwd(), "uploads", filename);
    const outputPath = join(process.cwd(), "uploads", `thumb-${filename}`);

    await sharp(filePath)
      .resize(200, 200, {
        fit: "cover",
        position: "center",
      })
      .toFile(outputPath);

    return {
      filename: `thumb-${filename}`,
      path: outputPath,
    };
  }
}
```

## 下一步

在下一篇文章中，我们将介绍：

1. WebSocket 实时通信
2. 消息推送功能
3. 在线状态管理
4. 实时通知系统

敬请期待！
