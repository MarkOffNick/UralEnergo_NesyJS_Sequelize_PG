import { Module } from '@nestjs/common'
import { AuthorsService } from './authors.service'
import { AuthorsController } from './authors.controller'
import { DatabaseModule } from 'src/database/database.module'
import { authorProviders } from './author.providers'

@Module({
  imports: [DatabaseModule],
  controllers: [AuthorsController],
  providers: [AuthorsService, ...authorProviders]
})
export class AuthorsModule {}
