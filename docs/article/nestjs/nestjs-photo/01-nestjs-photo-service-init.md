# NestJS 项目初始化

## 项目介绍

`api-photo-serve` 是一个基于 NestJS 框架开发的图片服务系统，提供图片上传、管理、分享等功能。本系列文章将详细介绍项目的搭建过程。

## 环境准备

### 1. 安装 Node.js

- 推荐使用 Node.js 18.x 或更高版本
- 使用 nvm 管理 Node.js 版本

### 2. 安装 MySQL

- 安装 MySQL 8.0 或更高版本
- 创建数据库：`photo_service`

### 3. 安装 Redis

- 安装 Redis 6.0 或更高版本
- 用于缓存和消息队列

## 项目初始化

### 1. 创建项目

```bash
# 安装 NestJS CLI
npm i -g @nestjs/cli

# 创建项目
nest new api-photo-serve

# 进入项目目录
cd api-photo-serve
```

### 2. 安装依赖

```bash
# 安装核心依赖
npm install @nestjs/typeorm typeorm mysql2
npm install @nestjs/config
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
npm install class-validator class-transformer
npm install @nestjs/swagger swagger-ui-express

# 安装开发依赖
npm install -D @types/node @types/passport-jwt
npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```

### 3. 项目配置

#### 3.1 环境变量配置

创建 `.env` 文件：

```env
# 应用配置
PORT=3000
NODE_ENV=development

# 数据库配置
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_DATABASE=photo_service

# JWT配置
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

# Redis配置
REDIS_HOST=localhost
REDIS_PORT=6379
```

#### 3.2 TypeORM 配置

创建 `src/config/typeorm.config.ts`：

```typescript
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";

export const getTypeOrmConfig = (
  configService: ConfigService
): TypeOrmModuleOptions => ({
  type: "mysql",
  host: configService.get("DB_HOST"),
  port: configService.get("DB_PORT"),
  username: configService.get("DB_USERNAME"),
  password: configService.get("DB_PASSWORD"),
  database: configService.get("DB_DATABASE"),
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  synchronize: configService.get("NODE_ENV") === "development",
  logging: configService.get("NODE_ENV") === "development",
});
```

#### 3.3 应用模块配置

修改 `src/app.module.ts`：

```typescript
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { getTypeOrmConfig } from "./config/typeorm.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        getTypeOrmConfig(configService),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
```

### 4. 项目结构

```
api-photo-serve/
├── src/
│   ├── modules/           # 功能模块
│   │   ├── common/           # 公共模块
│   │   │   ├── decorators/   # 自定义装饰器
│   │   │   ├── filters/      # 异常过滤器
│   │   │   ├── guards/       # 守卫
│   │   │   ├── interceptors/ # 拦截器
│   │   │   └── pipes/        # 管道
│   │   └── config/           # 配置文件
│   ├── test/                 # 测试文件
│   └── uploads/             # 上传文件目录
└── package.json         # 项目依赖
```

### 5. 基础工具类

#### 5.1 响应拦截器

创建 `src/common/interceptors/transform.interceptor.ts`：

```typescript
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface Response<T> {
  data: T;
  code: number;
  message: string;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => ({
        data,
        code: 0,
        message: "请求成功",
      }))
    );
  }
}
```

#### 5.2 异常过滤器

创建 `src/common/filters/http-exception.filter.ts`：

```typescript
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from "@nestjs/common";
import { Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    response.status(status).json({
      code: status,
      message: exceptionResponse["message"] || exception.message,
      data: null,
    });
  }
}
```

## 下一步

在下一篇文章中，我们将介绍：

1. 用户模块实现
2. 认证模块实现
3. 权限控制
4. 用户管理接口

敬请期待！
