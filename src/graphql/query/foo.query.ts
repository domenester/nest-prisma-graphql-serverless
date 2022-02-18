import { Args, Resolver, Query } from '@nestjs/graphql';
import { Foo } from '../../model';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/strategies/jwt-auth.guard';
import { ValidationPipe } from '../../pipes/validation.pipe';
import { FooResponse, FooListResponse } from '../resolver-response';
import { FooListInput, FooSearchInput } from '../../validation/foo/foo.input';
import { ModuleTestService } from '../../service/module-test.service';

@Resolver(of => Foo)
export class FooQuery {
  constructor(
    private readonly service: ModuleTestService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Query(returns => FooListResponse)
  async listFoo(
    @Args({
      name: 'body',
      type: () => FooListInput,
      nullable: true
    }, new ValidationPipe()) body: FooListInput
  ): Promise<FooListResponse> {
    const modetTestList = await this.service.list(body)
    return {
      data: modetTestList,
      message: 'Model test list loaded'
    }
  }

  @UseGuards(JwtAuthGuard)
  @Query(returns => FooResponse)
  async searchFoo(
    @Args({
      name: 'body',
      type: () => FooSearchInput,
      nullable: true
    }, new ValidationPipe()) body: FooSearchInput
  ): Promise<FooResponse> {
    const modetTest = await this.service.getById(body)
    return {
      data: modetTest,
      message: 'Model test loaded'
    }
  }
}