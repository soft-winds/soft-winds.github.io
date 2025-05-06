# NestJS 邮件服务集成

## 邮件服务配置

### 1. 安装依赖

```bash
# 安装邮件相关依赖
npm install @nestjs-modules/mailer nodemailer ejs
npm install -D @types/nodemailer
```

### 2. 配置邮件模块

创建 `src/modules/mail/mail.module.ts`：

```typescript
import { Module } from "@nestjs/common";
import { MailerModule } from "@nestjs-modules/mailer";
import { EjsAdapter } from "@nestjs-modules/mailer/dist/adapters/ejs.adapter";
import { join } from "path";
import { MailService } from "./mail.service";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get("MAIL_HOST"),
          port: config.get("MAIL_PORT"),
          secure: config.get("MAIL_SECURE"),
          auth: {
            user: config.get("MAIL_USER"),
            pass: config.get("MAIL_PASS"),
          },
        },
        defaults: {
          from: `"${config.get("MAIL_FROM_NAME")}" <${config.get(
            "MAIL_FROM"
          )}>`,
        },
        template: {
          dir: join(__dirname, "templates"),
          adapter: new EjsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
```

### 3. 邮件模板设计

创建 `src/modules/mail/templates/welcome.ejs`：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>欢迎加入图片服务</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        text-align: center;
        padding: 20px 0;
        background-color: #f8f9fa;
      }
      .content {
        padding: 20px 0;
      }
      .footer {
        text-align: center;
        padding: 20px 0;
        font-size: 12px;
        color: #666;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>欢迎加入图片服务</h1>
      </div>
      <div class="content">
        <p>亲爱的 <%= username %>,</p>
        <p>感谢您注册我们的图片服务！我们很高兴您能加入我们。</p>
        <p>您现在可以：</p>
        <ul>
          <li>上传和管理您的图片</li>
          <li>分享图片给其他用户</li>
          <li>探索其他用户分享的公开图片</li>
        </ul>
        <p>如果您有任何问题，请随时联系我们。</p>
      </div>
      <div class="footer">
        <p>此邮件由系统自动发送，请勿回复。</p>
      </div>
    </div>
  </body>
</html>
```

创建 `src/modules/mail/templates/reset-password.ejs`：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>重置密码</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        text-align: center;
        padding: 20px 0;
        background-color: #f8f9fa;
      }
      .content {
        padding: 20px 0;
      }
      .button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 5px;
      }
      .footer {
        text-align: center;
        padding: 20px 0;
        font-size: 12px;
        color: #666;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>重置密码</h1>
      </div>
      <div class="content">
        <p>亲爱的 <%= username %>,</p>
        <p>我们收到了重置您密码的请求。请点击下面的按钮重置密码：</p>
        <p style="text-align: center;">
          <a href="<%= resetUrl %>" class="button">重置密码</a>
        </p>
        <p>如果您没有请求重置密码，请忽略此邮件。</p>
        <p>此链接将在1小时后失效。</p>
      </div>
      <div class="footer">
        <p>此邮件由系统自动发送，请勿回复。</p>
      </div>
    </div>
  </body>
</html>
```

### 4. 邮件发送服务

创建 `src/modules/mail/mail.service.ts`：

```typescript
import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private configService: ConfigService
  ) {}

  async sendWelcomeEmail(username: string, email: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: "欢迎加入图片服务",
      template: "welcome",
      context: {
        username,
      },
    });
  }

  async sendPasswordResetEmail(
    username: string,
    email: string,
    resetToken: string
  ) {
    const resetUrl = `${this.configService.get(
      "FRONTEND_URL"
    )}/reset-password?token=${resetToken}`;
    await this.mailerService.sendMail({
      to: email,
      subject: "重置密码",
      template: "reset-password",
      context: {
        username,
        resetUrl,
      },
    });
  }

  async sendPhotoSharedNotification(
    username: string,
    email: string,
    photoTitle: string
  ) {
    await this.mailerService.sendMail({
      to: email,
      subject: "图片分享通知",
      template: "photo-shared",
      context: {
        username,
        photoTitle,
      },
    });
  }
}
```

## 定时任务实现

### 1. 安装依赖

```bash
# 安装定时任务相关依赖
npm install @nestjs/schedule
```

### 2. 配置定时任务

创建 `src/modules/schedule/schedule.service.ts`：

```typescript
import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { MailService } from "../mail/mail.service";
import { UserService } from "../user/user.service";
import { PhotoService } from "../photo/photo.service";

@Injectable()
export class ScheduleService {
  constructor(
    private mailService: MailService,
    private userService: UserService,
    private photoService: PhotoService
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_9AM)
  async sendDailyDigest() {
    const users = await this.userService.findAll();
    for (const user of users) {
      const recentPhotos = await this.photoService.findRecentPhotos(user.id);
      if (recentPhotos.length > 0) {
        await this.mailService.sendMail({
          to: user.email,
          subject: "每日图片摘要",
          template: "daily-digest",
          context: {
            username: user.username,
            photos: recentPhotos,
          },
        });
      }
    }
  }

  @Cron(CronExpression.EVERY_WEEK)
  async cleanupUnusedPhotos() {
    const unusedPhotos = await this.photoService.findUnusedPhotos();
    for (const photo of unusedPhotos) {
      await this.photoService.remove(photo.id);
    }
  }
}
```

## 邮件队列实现

### 1. 安装依赖

```bash
# 安装队列相关依赖
npm install @nestjs/bull bull
npm install -D @types/bull
```

### 2. 配置邮件队列

创建 `src/modules/mail/mail.processor.ts`：

```typescript
import { Process, Processor } from "@nestjs/bull";
import { Logger } from "@nestjs/common";
import { Job } from "bull";
import { MailService } from "./mail.service";

@Processor("mail")
export class MailProcessor {
  private readonly logger = new Logger(MailProcessor.name);

  constructor(private mailService: MailService) {}

  @Process("welcome")
  async handleWelcome(job: Job) {
    this.logger.debug("Processing welcome email...");
    const { username, email } = job.data;
    await this.mailService.sendWelcomeEmail(username, email);
  }

  @Process("reset-password")
  async handlePasswordReset(job: Job) {
    this.logger.debug("Processing password reset email...");
    const { username, email, resetToken } = job.data;
    await this.mailService.sendPasswordResetEmail(username, email, resetToken);
  }

  @Process("photo-shared")
  async handlePhotoShared(job: Job) {
    this.logger.debug("Processing photo shared notification...");
    const { username, email, photoTitle } = job.data;
    await this.mailService.sendPhotoSharedNotification(
      username,
      email,
      photoTitle
    );
  }
}
```

修改 `src/modules/mail/mail.module.ts`：

```typescript
import { Module } from "@nestjs/common";
import { BullModule } from "@nestjs/bull";
import { MailerModule } from "@nestjs-modules/mailer";
import { EjsAdapter } from "@nestjs-modules/mailer/dist/adapters/ejs.adapter";
import { join } from "path";
import { MailService } from "./mail.service";
import { MailProcessor } from "./mail.processor";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    BullModule.registerQueue({
      name: "mail",
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get("MAIL_HOST"),
          port: config.get("MAIL_PORT"),
          secure: config.get("MAIL_SECURE"),
          auth: {
            user: config.get("MAIL_USER"),
            pass: config.get("MAIL_PASS"),
          },
        },
        defaults: {
          from: `"${config.get("MAIL_FROM_NAME")}" <${config.get(
            "MAIL_FROM"
          )}>`,
        },
        template: {
          dir: join(__dirname, "templates"),
          adapter: new EjsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MailService, MailProcessor],
  exports: [MailService],
})
export class MailModule {}
```

## 下一步

在下一篇文章中，我们将介绍：

1. 前端项目分析
2. 技术栈详解
3. 项目结构说明
4. 核心功能实现

敬请期待！
