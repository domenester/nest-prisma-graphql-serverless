import { Module } from '@nestjs/common'
import { FooMutation } from '../graphql/mutation/foo.mutation'
import { FooQuery } from '../graphql/query/foo.query'
import { FooResolver } from '../graphql/resolver/foo.resolver'
import { ModuleTestService } from '../service/module-test.service'
import { PrismaModule } from './prisma.module'

@Module({
  imports: [
    PrismaModule
  ],
  providers: [
    FooQuery,
    FooMutation,
    FooResolver,
    ModuleTestService,
  ],
  exports: [
    ModuleTestService
  ]
})
export class FooModule {}
