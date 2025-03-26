import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { User } from './entities/user.entity'

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Добавление пользователя' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, type: User })
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto)
  }

  @Get()
  @ApiOperation({ summary: 'Получение списка всех пользователей' })
  @ApiResponse({ status: 200, type: User, isArray: true })
  findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение данных об одном пользователе по ID' })
  @ApiResponse({ status: 200, type: User })
  @ApiQuery({ name: 'id', description: 'ID пользователя' })
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(+id)
  }
}
