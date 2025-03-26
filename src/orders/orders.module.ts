import { Module } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { OrdersController } from './orders.controller'
import { DatabaseModule } from 'src/database/database.module'
import { orderProviders } from './order.providers'
import { userProviders } from 'src/users/user.providers'
import { bookProviders } from 'src/books/books.providers'

@Module({
  imports: [DatabaseModule],
  controllers: [OrdersController],
  providers: [OrdersService, ...orderProviders, ...userProviders, ...bookProviders]
})
export class OrdersModule {}
