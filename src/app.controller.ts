import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller("/notification")
export class AppController {
  constructor(private readonly prisma: PrismaService) { }

  @Get()
  get() {
    return this.prisma.notification.findMany();
  }

  @Post()
  postNotification(@Body() body: CreateNotificationBody) {
    console.log("BODY: ", body)
    // return this.prisma.notification.create({
    //   data: {
    //     id: randomUUID(),
    //     category: 'social',
    //     content: randomUUID() + "notificação",
    //     recipientId: randomUUID()
    //   }
    // });
  }
}
