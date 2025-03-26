import { Module } from '@nestjs/common'
import { BooksModule } from './books/books.module'
import { OrdersModule } from './orders/orders.module'
import { UsersModule } from './users/users.module'
import { AuthorsModule } from './authors/authors.module'

@Module({
  imports: [BooksModule, OrdersModule, UsersModule, AuthorsModule]
})
export class AppModule {}
