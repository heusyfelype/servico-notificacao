import { Injectable } from "@nestjs/common";
import { MailService } from "./mail.service";

@Injectable()
export class SMTPmailservice implements MailService{
  sendMail(): string {
      return 'SMTP Mail'
  }
}