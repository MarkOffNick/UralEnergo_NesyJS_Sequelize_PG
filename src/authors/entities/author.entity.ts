import { ApiProperty } from '@nestjs/swagger'
import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript'
import { Book } from 'src/books/entities/book.entity'
import { AuthorBook } from './author-book.entity'

@Table
export class Author extends Model {
  @ApiProperty({ example: 1, description: 'ID автора' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  id: number

  @ApiProperty({ example: new Date(), description: 'Дата создания записи' })
  @Column({ field: 'createdAt', type: DataType.DATE })
  createdAt: Date

  @ApiProperty({ example: new Date(), description: 'Дата последнего обновления записи' })
  @Column({ field: 'updatedAt', type: DataType.DATE })
  updatedAt: Date

  @ApiProperty({ example: 'Ганс Христиан Андерсен', description: 'ФИО автора' })
  @Column
  name: string

  @BelongsToMany(() => Book, () => AuthorBook)
  books: Book[]
}
