import { ApiProperty } from '@nestjs/swagger'
import { Table, Column, Model, IsEmail, Unique, DataType, HasMany } from 'sequelize-typescript'
import { Order } from 'src/orders/entities/order.entity'

@Table
export class User extends Model {
  @ApiProperty({ example: 1, description: 'ID пользователя' })
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

  @ApiProperty({ example: 'Иванов Иван Иванович', description: 'ФИО пользователя' })
  @Column
  name: string

  @ApiProperty({ example: 'ivanov@email.ru', description: 'Электронная почта пользователя' })
  @Unique
  @IsEmail
  @Column
  email: string

  @HasMany(() => Order)
  orders: Order[]
}
