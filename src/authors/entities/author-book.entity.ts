import { Table, Column, Model, ForeignKey } from 'sequelize-typescript'
import { Author } from './author.entity'
import { Book } from 'src/books/entities/book.entity'

@Table
export class AuthorBook extends Model {
  @ForeignKey(() => Author)
  @Column
  authorId: number

  @ForeignKey(() => Book)
  @Column
  bookId: number
}
