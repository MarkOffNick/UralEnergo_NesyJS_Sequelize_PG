import { IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateOrderDto {
  @ApiProperty({ example: 1, description: 'ID пользователя' })
  @IsNotEmpty({ message: 'Не указан пользователь' })
  userId: number

  @ApiProperty({ example: 1, description: 'ID книги' })
  @IsNotEmpty({ message: 'Не указана книга' })
  bookId: number
}
