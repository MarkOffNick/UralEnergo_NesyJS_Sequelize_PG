import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { DatabaseModule } from 'src/database/database.module';
import { bookProviders } from './books.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksController],
  providers: [BooksService, ...bookProviders],
})
export class BooksModule {}
