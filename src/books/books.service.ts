import { Injectable, Inject, BadRequestException, NotFoundException } from '@nestjs/common'
import { CreateBookDto } from './dto/create-book.dto'
import { Book } from './entities/book.entity'
import { Op } from 'sequelize'
import { Author } from 'src/authors/entities/author.entity'

@Injectable()
export class BooksService {
  constructor(
    @Inject('bookRepository')
    private bookRepository: typeof Book
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const transaction = await this.bookRepository.sequelize.transaction()
    try {
      const book = new Book()
      book.title = createBookDto.title

      await book.save({ transaction })
      await book.$set('authors', createBookDto.authorIds, { transaction })

      await transaction.commit()
      return book
    } catch (error) {
      await transaction.rollback()
      throw new BadRequestException('Ошибка при сохранении книги')
    }
  }

  async findAll(title?: string, authorId?: number): Promise<Book[]> {
    const whereConditions: { title?: { [Op.like]: string } } = title ? { title: { [Op.like]: `%${title}%` } } : {}
    const includeCondition = [
      {
        model: Author,
        attributes: ['name'],
        ...(authorId ? { where: { id: authorId } } : {})
      }
    ]

    return await this.bookRepository.findAll({
      where: whereConditions,
      include: includeCondition,
      attributes: ['id', 'title']
    })
  }

  async findOne(id: number): Promise<Book> {
    const book = await this.bookRepository.findOne({ where: { id } })
    if (!book) {
      throw new NotFoundException('Книга не найдена')
    }
    return book
  }

  async remove(id: number): Promise<void> {
    await this.bookRepository.destroy({ where: { id } })
  }
}
