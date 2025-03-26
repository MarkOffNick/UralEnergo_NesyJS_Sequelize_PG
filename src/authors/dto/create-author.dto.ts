import { IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateAuthorDto {
  @ApiProperty({ example: 'Ганс Христиан Андерсен', description: 'ФИО автора' })
  @IsNotEmpty({ message: 'Имя не должно быть пустым' })
  name: string
}
