import { Injectable } from '@nestjs/common';
import {ModelTest} from '@prisma/client'
import { ModelTestCreateInput, ModelTestListInput, ModelTestSearchInput } from '../validation/model-test/model-test.input';
import { PrismaService } from './prisma.service';

@Injectable()
export class ModuleTestService {
  constructor(
    private prisma: PrismaService,
  ) { }

  getById(
    body: ModelTestSearchInput
  ): Promise<ModelTest> {
    return this.prisma.modelTest.findFirst({
      where: {id: body.id}
    })
  }

  list(
    body: ModelTestListInput
  ): Promise<ModelTest[]> {
    const {field} = body
    return this.prisma.modelTest.findMany({
      ...(field && {where: {field}})
    })
  }

  create(
    data: ModelTestCreateInput
  ): Promise<ModelTest> {
    return this.prisma.modelTest.create({data})
  }
}