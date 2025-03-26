import { Injectable, Inject, BadRequestException, NotFoundException } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @Inject('userRepository')
    private userRepository: typeof User
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const isExist = await this.userRepository.findOne({
      where: { email: createUserDto.email }
    })
    if (isExist) throw new BadRequestException('Пользователь с такой почтой уже зарегистрирован')
    const user = new User()
    user.name = createUserDto.name
    user.email = createUserDto.email
    return await user.save()
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll()
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } })
    if (!user) {
      throw new NotFoundException('Пользователь не найден')
    }
    return user
  }
}
