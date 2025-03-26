import { Author } from './entities/author.entity'

export const authorProviders = [
  {
    provide: 'authorRepository',
    useValue: Author
  }
]
