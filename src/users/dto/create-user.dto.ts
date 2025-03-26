import { IsEmail, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({ example: 'Иванов Иван Иванович', description: 'ФИО пользователя' })
  @IsNotEmpty({ message: 'Имя не должно быть пустым' })
  name: string

  @ApiProperty({ example: 'ivanov@email.ru', description: 'Электронная почта пользователя' })
  @IsEmail({}, { message: 'Некорректный формат электронной почты' })
  @IsNotEmpty({ message: 'Электронная почта не должна быть пустой' })
  email: string
}
