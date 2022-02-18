import { Injectable } from '@nestjs/common';
import {Foo} from '@prisma/client'
import { FooCreateInput, FooListInput, FooSearchInput } from '../validation/foo/foo.input';
import { PrismaService } from './prisma.service';

@Injectable()
export class ModuleTestService {
  constructor(
    private prisma: PrismaService,
  ) { }

  getById(
    body: FooSearchInput
  ): Promise<Foo> {
    return this.prisma.foo.findFirst({
      where: {id: body.id}
    })
  }

  list(
    body: FooListInput
  ): Promise<Foo[]> {
    const {field} = body
    return this.prisma.foo.findMany({
      ...(field && {where: {field}})
    })
  }

  create(
    data: FooCreateInput
  ): Promise<Foo> {
    return this.prisma.foo.create({data})
  }
}