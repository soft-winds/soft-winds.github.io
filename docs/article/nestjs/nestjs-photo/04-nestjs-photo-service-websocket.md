# NestJS WebSocket 实时通信

## WebSocket 配置

### 1. 安装依赖

```bash
# 安装 WebSocket 相关依赖
npm install @nestjs/websockets @nestjs/platform-socket.io
npm install -D @types/socket.io
```

### 2. 创建 WebSocket 网关

创建 `src/modules/websocket/websocket.gateway.ts`：

```typescript
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { Logger } from "@nestjs/common";

@WebSocketGateway({
  cors: {
    origin: "*",
  },
})
export class WebsocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger("WebsocketGateway");
  private connectedClients: Map<string, Socket> = new Map();

  afterInit(server: Server) {
    this.logger.log("WebSocket 服务器初始化完成");
  }

  handleConnection(client: Socket) {
    this.logger.log(`客户端连接: ${client.id}`);
    this.connectedClients.set(client.id, client);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`客户端断开连接: ${client.id}`);
    this.connectedClients.delete(client.id);
  }

  @SubscribeMessage("join")
  handleJoin(client: Socket, payload: { userId: string }) {
    client.join(payload.userId);
    this.logger.log(`用户 ${payload.userId} 加入房间`);
  }

  @SubscribeMessage("leave")
  handleLeave(client: Socket, payload: { userId: string }) {
    client.leave(payload.userId);
    this.logger.log(`用户 ${payload.userId} 离开房间`);
  }

  @SubscribeMessage("message")
  handleMessage(client: Socket, payload: { to: string; message: any }) {
    this.server.to(payload.to).emit("message", {
      from: client.id,
      message: payload.message,
    });
  }

  // 广播消息给所有客户端
  broadcastMessage(event: string, message: any) {
    this.server.emit(event, message);
  }

  // 发送消息给特定用户
  sendToUser(userId: string, event: string, message: any) {
    this.server.to(userId).emit(event, message);
  }
}
```

## 消息服务实现

### 1. 消息实体

创建 `src/modules/message/entities/message.entity.ts`：

```typescript
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity("messages")
export class Message {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  content: string;

  @Column()
  type: string;

  @ManyToOne(() => User)
  sender: User;

  @ManyToOne(() => User)
  receiver: User;

  @Column({ default: false })
  isRead: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
```

### 2. 消息服务

创建 `src/modules/message/message.service.ts`：

```typescript
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Message } from "./entities/message.entity";
import { CreateMessageDto } from "./dto/create-message.dto";
import { WebsocketGateway } from "../websocket/websocket.gateway";

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    private readonly websocketGateway: WebsocketGateway
  ) {}

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    const message = this.messageRepository.create(createMessageDto);
    const savedMessage = await this.messageRepository.save(message);

    // 发送实时消息
    this.websocketGateway.sendToUser(
      createMessageDto.receiver.id,
      "newMessage",
      savedMessage
    );

    return savedMessage;
  }

  async findAll(userId: string): Promise<Message[]> {
    return this.messageRepository.find({
      where: [{ sender: { id: userId } }, { receiver: { id: userId } }],
      relations: ["sender", "receiver"],
      order: {
        createdAt: "DESC",
      },
    });
  }

  async markAsRead(messageId: string): Promise<Message> {
    const message = await this.messageRepository.findOne({
      where: { id: messageId },
    });
    message.isRead = true;
    return this.messageRepository.save(message);
  }
}
```

## 通知服务实现

### 1. 通知实体

创建 `src/modules/notification/entities/notification.entity.ts`：

```typescript
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity("notifications")
export class Notification {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  type: string;

  @Column()
  content: string;

  @ManyToOne(() => User)
  user: User;

  @Column({ default: false })
  isRead: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
```

### 2. 通知服务

创建 `src/modules/notification/notification.service.ts`：

```typescript
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Notification } from "./entities/notification.entity";
import { CreateNotificationDto } from "./dto/create-notification.dto";
import { WebsocketGateway } from "../websocket/websocket.gateway";

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
    private readonly websocketGateway: WebsocketGateway
  ) {}

  async create(
    createNotificationDto: CreateNotificationDto
  ): Promise<Notification> {
    const notification = this.notificationRepository.create(
      createNotificationDto
    );
    const savedNotification = await this.notificationRepository.save(
      notification
    );

    // 发送实时通知
    this.websocketGateway.sendToUser(
      createNotificationDto.user.id,
      "newNotification",
      savedNotification
    );

    return savedNotification;
  }

  async findAll(userId: string): Promise<Notification[]> {
    return this.notificationRepository.find({
      where: { user: { id: userId } },
      relations: ["user"],
      order: {
        createdAt: "DESC",
      },
    });
  }

  async markAsRead(notificationId: string): Promise<Notification> {
    const notification = await this.notificationRepository.findOne({
      where: { id: notificationId },
    });
    notification.isRead = true;
    return this.notificationRepository.save(notification);
  }
}
```

## 在线状态管理

### 1. 创建在线状态服务

创建 `src/modules/websocket/online-status.service.ts`：

```typescript
import { Injectable } from "@nestjs/common";
import { WebsocketGateway } from "./websocket.gateway";

@Injectable()
export class OnlineStatusService {
  private onlineUsers: Map<string, string> = new Map(); // userId -> socketId

  constructor(private readonly websocketGateway: WebsocketGateway) {}

  setUserOnline(userId: string, socketId: string) {
    this.onlineUsers.set(userId, socketId);
    this.broadcastOnlineStatus();
  }

  setUserOffline(userId: string) {
    this.onlineUsers.delete(userId);
    this.broadcastOnlineStatus();
  }

  isUserOnline(userId: string): boolean {
    return this.onlineUsers.has(userId);
  }

  getOnlineUsers(): string[] {
    return Array.from(this.onlineUsers.keys());
  }

  private broadcastOnlineStatus() {
    this.websocketGateway.broadcastMessage("onlineStatus", {
      onlineUsers: this.getOnlineUsers(),
    });
  }
}
```

## 下一步

在下一篇文章中，我们将介绍：

1. API 文档配置
2. Swagger 集成
3. 接口测试
4. 文档生成

敬请期待！
