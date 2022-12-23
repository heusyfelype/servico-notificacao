import { Injectable } from "@nestjs/common";
import { MailService } from "./mail.service";

@Injectable()
export class POSTMARKservice implements MailService{
  sendMail(): string {
      return 'POSTMARK Mail'
  }
}