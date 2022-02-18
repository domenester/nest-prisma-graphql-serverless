import { Args, Resolver, Mutation } from '@nestjs/graphql';
import { Foo } from '../../model';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/strategies/jwt-auth.guard';
import { ValidationPipe } from '../../pipes/validation.pipe';
import { FooResponse } from '../resolver-response';
import { FooCreateInput } from '../../validation/foo/foo.input';
import { ModuleTestService } from '../../service/module-test.service';

@Resolver(of => Foo)
export class FooMutation {
  constructor(
    private service: ModuleTestService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(returns => FooResponse)
  async createFoo(
    @Args('body', new ValidationPipe()) body: FooCreateInput
  ): Promise<FooResponse> {
    const foo = await this.service.create(body)
    return {
      message: 'Foo created.',
      data: foo
    }
  }
}