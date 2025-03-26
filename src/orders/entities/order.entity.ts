import { ApiProperty } from '@nestjs/swagger'
import { Table, Column, Model, BelongsTo, ForeignKey, DataType } from 'sequelize-typescript'
import { Book } from 'src/books/entities/book.entity'
import { User } from 'src/users/entities/user.entity'

@Table
export class Order extends Model {
  @ApiProperty({ example: 1, description: 'ID заказа' })
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

  @ApiProperty({ example: 1, description: 'ID пользователя' })
  @ForeignKey(() => Book)
  @Column({
    type: DataType.INTEGER,
    field: 'bookId'
  })
  bookId: number

  @BelongsTo(() => Book)
  books: Book

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: 'userId'
  })
  userId: number

  @BelongsTo(() => User)
  users: User
}
