import { IsNotEmpty, IsUUID, Length } from "class-validator"

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string
  @IsNotEmpty()
  content: string
  @IsNotEmpty()
  category: string
}