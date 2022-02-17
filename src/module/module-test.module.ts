import { Module } from '@nestjs/common'
import { ModelTestMutation } from '../graphql/mutation/model-test.mutation'
import { ModelTestQuery } from '../graphql/query/model-test.query'
import { ModelTestResolver } from '../graphql/resolver/model-test.resolver'
import { ModuleTestService } from '../service/module-test.service'
import { PrismaModule } from './prisma.module'

@Module({
  imports: [
    PrismaModule
  ],
  providers: [
    ModelTestQuery,
    ModelTestMutation,
    ModelTestResolver,
    ModuleTestService,
  ],
  exports: [
    ModuleTestService
  ]
})
export class ModuleTestModule {}
