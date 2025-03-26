import { Injectable, Inject, NotFoundException } from '@nestjs/common'
import { CreateOrderDto } from './dto/create-order.dto'
import { Order } from './entities/order.entity'
import { User } from 'src/users/entities/user.entity'
import { Book } from 'src/books/entities/book.entity'

@Injectable()
export class OrdersService {
  constructor(
    @Inject('orderRepository')
    private orderRepository: typeof Order,
    @Inject('userRepository')
    private userRepository: typeof User,
    @Inject('bookRepository')
    private bookRepository: typeof Book
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const user = await this.userRepository.findOne({ where: { id: createOrderDto.userId } })
    if (!user) {
      throw new NotFoundException('Пользователь не найден')
    }

    const book = await this.bookRepository.findOne({ where: { id: createOrderDto.bookId } })
    if (!book) {
      throw new NotFoundException('Книга не найдена')
    }
    const order = new Order()
    order.userId = createOrderDto.userId
    order.bookId = createOrderDto.bookId
    return await order.save()
  }

  async findAll(userId?: number, bookId?: number): Promise<Order[]> {
    const whereClause: Partial<Record<keyof Order, number>> = {}

    if (userId) {
      whereClause.userId = userId
    }

    if (bookId) {
      whereClause.bookId = bookId
    }

    return await this.orderRepository.findAll({
      where: Object.keys(whereClause).length ? whereClause : {}
    })
  }

  async findOne(id: number): Promise<Order> {
    const order = await this.orderRepository.findOne({ where: { id } })
    if (!order) {
      throw new NotFoundException('Заказ не найден')
    }
    return order
  }
}
