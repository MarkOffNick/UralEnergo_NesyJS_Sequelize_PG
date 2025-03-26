import { ApiProperty } from '@nestjs/swagger'
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber } from 'class-validator'

export class CreateBookDto {
  @ApiProperty({ example: 'Сказки', description: 'Название книги' })
  @IsNotEmpty({ message: 'Название книги не должно быть пустым' })
  title: string

  @ApiProperty({ example: [1], description: 'ID автора книги' })
  @IsArray({ message: 'ID авторов должны быть указаны массивом' })
  @ArrayNotEmpty({ message: 'Список ID авторов не должен быть пустым' })
  @IsNumber({}, { each: true, message: 'Каждый ID автора должен быть числом' })
  authorIds: number[]
}
