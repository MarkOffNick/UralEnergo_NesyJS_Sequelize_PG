import { ApiProperty } from '@nestjs/swagger'
import { Table, Column, Model, DataType, HasMany, BelongsToMany } from 'sequelize-typescript'
import { AuthorBook } from 'src/authors/entities/author-book.entity'
import { Author } from 'src/authors/entities/author.entity'
import { Order } from 'src/orders/entities/order.entity'

@Table
export class Book extends Model {
  @ApiProperty({ example: 1, description: 'ID книги' })
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

  @ApiProperty({ example: 'Сказки', description: 'Название книги' })
  @Column
  title: string

  @ApiProperty({ type: [Author] })
  @BelongsToMany(() => Author, () => AuthorBook)
  authors: Author[]

  @HasMany(() => Order)
  orders: Order[]
}
