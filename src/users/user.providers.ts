import { User } from './entities/user.entity'

export const userProviders = [
  {
    provide: 'userRepository',
    useValue: User
  }
]
