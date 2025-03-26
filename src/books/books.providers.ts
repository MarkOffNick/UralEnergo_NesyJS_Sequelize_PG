import { Book } from './entities/book.entity';

export const bookProviders = [
  {
    provide: 'bookRepository',
    useValue: Book,
  },
];