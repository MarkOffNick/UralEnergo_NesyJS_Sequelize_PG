import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { AuthorsService } from './authors.service'
import { CreateAuthorDto } from './dto/create-author.dto'
import { ApiBody, ApiOkResponse, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Author } from './entities/author.entity'

@ApiTags('Авторы')
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  @ApiOperation({ summary: 'Добавление автора' })
  @ApiBody({ type: CreateAuthorDto })
  @ApiResponse({ status: 201, type: Author })
  create(@Body() createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorsService.create(createAuthorDto)
  }

  @Get()
  @ApiOperation({ summary: 'Получение списка всех авторов' })
  @ApiOkResponse({ status: 200, type: Author, isArray: true })
  findAll(): Promise<Author[]> {
    return this.authorsService.findAll()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение информации об одном авторе по ID' })
  @ApiResponse({ status: 200, type: Author })
  @ApiQuery({ name: 'id', description: 'ID автора' })
  findOne(@Param('id') id: string): Promise<Author> {
    return this.authorsService.findOne(+id)
  }
  ы
}
