import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { POSTMARKservice } from './mail/postmark.service';
import { SMTPmailservice } from './mail/smtp-mail.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [{
    provide: MailService,
    useClass: POSTMARKservice
  }],
})
export class AppModule { }
