import { Injectable, Inject, NotFoundException } from '@nestjs/common'
import { CreateAuthorDto } from './dto/create-author.dto'
import { Author } from './entities/author.entity'

@Injectable()
export class AuthorsService {
  constructor(
    @Inject('authorRepository')
    private authorRepository: typeof Author
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const author = new Author()
    author.name = createAuthorDto.name
    return await author.save()
  }

  async findAll(): Promise<Author[]> {
    return await this.authorRepository.findAll()
  }

  async findOne(id: number): Promise<Author> {
    const author = await this.authorRepository.findOne({ where: { id } })
    if (!author) {
      throw new NotFoundException('Автор не найден')
    }
    return author
  }
}
