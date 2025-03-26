import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { ApiBody, ApiTags, ApiQuery, ApiOperation, ApiOkResponse } from '@nestjs/swagger'
import { Order } from './entities/order.entity'

@ApiTags('Заказы')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Формирование заказ' })
  @ApiBody({ type: CreateOrderDto })
  @ApiOkResponse({ status: 201, type: Order })
  create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersService.create(createOrderDto)
  }

  @Get()
  @ApiOperation({ summary: 'Получение списка всех заказов' })
  @ApiOkResponse({ status: 200, type: Order, isArray: true })
  @ApiQuery({ name: 'user', required: false, description: 'Поиск по ID пользователя' })
  @ApiQuery({ name: 'book', required: false, description: 'Поиск по ID книги' })
  findAll(@Query('user') userId?: number, @Query('book') bookId?: number): Promise<Order[]> {
    return this.ordersService.findAll(userId, bookId)
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение информации об одном заказе по ID' })
  @ApiOkResponse({ status: 200, type: Order })
  @ApiQuery({ name: 'id', description: 'ID заказа' })
  findOne(@Param('id') id: string): Promise<Order> {
    return this.ordersService.findOne(+id)
  }
}
