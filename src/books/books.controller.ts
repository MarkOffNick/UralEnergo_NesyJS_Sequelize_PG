import { Controller, Get, Post, Body, Param, Delete, Query } from '@nestjs/common'
import { BooksService } from './books.service'
import { CreateBookDto } from './dto/create-book.dto'
import { ApiBody, ApiResponse, ApiTags, ApiQuery, ApiOkResponse, ApiOperation } from '@nestjs/swagger'
import { Book } from './entities/book.entity'

@ApiTags('Книги')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiOperation({ summary: 'Добавление кникги' })
  @ApiBody({ type: CreateBookDto })
  @ApiOkResponse({ status: 201, type: Book })
  create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.create(createBookDto)
  }

  @Get()
  @ApiOperation({ summary: 'Получение списка всех книг' })
  @ApiOkResponse({ status: 200, type: Book, isArray: true })
  @ApiQuery({ name: 'search', required: false, description: 'Поиск по названию книги' })
  @ApiQuery({ name: 'author', required: false, description: 'Фильтрация по ID автора' })
  findAll(@Query('search') title?: string, @Query('author') authorId?: number): Promise<Book[]> {
    return this.booksService.findAll(title, authorId)
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение данных об одной книги по ID' })
  @ApiQuery({ name: 'id', description: 'ID книги' })
  @ApiResponse({ status: 200, type: Book })
  findOne(@Param('id') id: string): Promise<Book> {
    return this.booksService.findOne(+id)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удаление книги по ID' })
  @ApiOkResponse({ status: 200 })
  @ApiQuery({ name: 'id', description: 'ID книги' })
  remove(@Param('id') id: string): Promise<void> {
    return this.booksService.remove(+id)
  }
}
