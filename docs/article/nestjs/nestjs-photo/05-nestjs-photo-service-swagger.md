# NestJS Swagger API 文档配置

## Swagger 配置

### 1. 安装依赖

```bash
# 安装 Swagger 相关依赖
npm install @nestjs/swagger swagger-ui-express
```

### 2. 配置 Swagger

修改 `src/main.ts`：

```typescript
import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局管道
  app.useGlobalPipes(new ValidationPipe());

  // Swagger 配置
  const config = new DocumentBuilder()
    .setTitle("图片服务 API")
    .setDescription("图片服务系统的 API 文档")
    .setVersion("1.0")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}
bootstrap();
```

## DTO 配置

### 1. 用户 DTO

创建 `src/modules/user/dto/create-user.dto.ts`：

```typescript
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, MinLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ description: "用户名", example: "john_doe" })
  @IsString()
  @MinLength(3)
  username: string;

  @ApiProperty({ description: "邮箱", example: "john@example.com" })
  @IsEmail()
  email: string;

  @ApiProperty({ description: "密码", example: "password123" })
  @IsString()
  @MinLength(6)
  password: string;
}
```

创建 `src/modules/user/dto/update-user.dto.ts`：

```typescript
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, IsOptional } from "class-validator";

export class UpdateUserDto {
  @ApiProperty({ description: "用户名", required: false })
  @IsString()
  @IsOptional()
  username?: string;

  @ApiProperty({ description: "邮箱", required: false })
  @IsEmail()
  @IsOptional()
  email?: string;
}
```

### 2. 图片 DTO

创建 `src/modules/photo/dto/create-photo.dto.ts`：

```typescript
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsBoolean, IsOptional } from "class-validator";

export class CreatePhotoDto {
  @ApiProperty({ description: "文件名" })
  @IsString()
  filename: string;

  @ApiProperty({ description: "原始文件名" })
  @IsString()
  originalname: string;

  @ApiProperty({ description: "文件类型" })
  @IsString()
  mimetype: string;

  @ApiProperty({ description: "文件大小" })
  @IsNumber()
  size: number;

  @ApiProperty({ description: "文件路径" })
  @IsString()
  path: string;

  @ApiProperty({ description: "是否公开", default: false })
  @IsBoolean()
  @IsOptional()
  isPublic?: boolean;
}
```

## 实体配置

### 1. 用户实体

修改 `src/modules/user/entities/user.entity.ts`：

```typescript
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Exclude } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { Photo } from "../../photo/entities/photo.entity";

@Entity("users")
export class User {
  @ApiProperty({ description: "用户ID" })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty({ description: "用户名" })
  @Column({ unique: true })
  username: string;

  @ApiProperty({ description: "邮箱" })
  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @ApiProperty({ description: "用户角色" })
  @Column({ default: "user" })
  role: string;

  @OneToMany(() => Photo, (photo) => photo.user)
  photos: Photo[];

  @ApiProperty({ description: "创建时间" })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: "更新时间" })
  @UpdateDateColumn()
  updatedAt: Date;
}
```

### 2. 图片实体

修改 `src/modules/photo/entities/photo.entity.ts`：

```typescript
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../user/entities/user.entity";

@Entity("photos")
export class Photo {
  @ApiProperty({ description: "图片ID" })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty({ description: "文件名" })
  @Column()
  filename: string;

  @ApiProperty({ description: "原始文件名" })
  @Column()
  originalname: string;

  @ApiProperty({ description: "文件类型" })
  @Column()
  mimetype: string;

  @ApiProperty({ description: "文件大小" })
  @Column()
  size: number;

  @ApiProperty({ description: "文件路径" })
  @Column()
  path: string;

  @ApiProperty({ description: "是否公开" })
  @Column({ default: false })
  isPublic: boolean;

  @ApiProperty({ description: "上传用户" })
  @ManyToOne(() => User, (user) => user.photos)
  user: User;

  @ApiProperty({ description: "创建时间" })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: "更新时间" })
  @UpdateDateColumn()
  updatedAt: Date;
}
```

## 控制器配置

### 1. 用户控制器

修改 `src/modules/user/user.controller.ts`：

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
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { RolesGuard } from "../auth/guards/roles.guard";
import { Roles } from "../auth/decorators/roles.decorator";
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiResponse,
} from "@nestjs/swagger";
import { User } from "./entities/user.entity";

@ApiTags("用户管理")
@Controller("users")
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Roles("admin")
  @ApiOperation({ summary: "创建用户" })
  @ApiResponse({ status: 201, description: "创建成功", type: User })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @Roles("admin")
  @ApiOperation({ summary: "获取所有用户" })
  @ApiResponse({ status: 200, description: "获取成功", type: [User] })
  findAll() {
    return this.userService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "获取指定用户" })
  @ApiResponse({ status: 200, description: "获取成功", type: User })
  findOne(@Param("id") id: string) {
    return this.userService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "更新用户信息" })
  @ApiResponse({ status: 200, description: "更新成功", type: User })
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(":id")
  @Roles("admin")
  @ApiOperation({ summary: "删除用户" })
  @ApiResponse({ status: 200, description: "删除成功" })
  remove(@Param("id") id: string) {
    return this.userService.remove(id);
  }
}
```

### 2. 图片控制器

修改 `src/modules/photo/photo.controller.ts`：

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
  ApiBody,
  ApiResponse,
} from "@nestjs/swagger";
import { Photo } from "./entities/photo.entity";

@ApiTags("图片管理")
@Controller("photos")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Post("upload")
  @UseInterceptors(FileInterceptor("file", multerConfig))
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @ApiOperation({ summary: "上传图片" })
  @ApiResponse({ status: 201, description: "上传成功", type: Photo })
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
  @ApiResponse({ status: 200, description: "获取成功", type: [Photo] })
  findAll(@Request() req) {
    return this.photoService.findAll(req.user);
  }

  @Get(":id")
  @ApiOperation({ summary: "获取指定图片" })
  @ApiResponse({ status: 200, description: "获取成功", type: Photo })
  findOne(@Param("id") id: string, @Request() req) {
    return this.photoService.findOne(id, req.user);
  }

  @Patch(":id")
  @ApiOperation({ summary: "更新图片信息" })
  @ApiResponse({ status: 200, description: "更新成功", type: Photo })
  update(
    @Param("id") id: string,
    @Body() updatePhotoDto: UpdatePhotoDto,
    @Request() req
  ) {
    return this.photoService.update(id, updatePhotoDto, req.user);
  }

  @Delete(":id")
  @ApiOperation({ summary: "删除图片" })
  @ApiResponse({ status: 200, description: "删除成功" })
  remove(@Param("id") id: string, @Request() req) {
    return this.photoService.remove(id, req.user);
  }
}
```

## 下一步

在下一篇文章中，我们将介绍：

1. 邮件服务集成
2. 邮件模板设计
3. 定时任务实现
4. 邮件队列管理

敬请期待！
