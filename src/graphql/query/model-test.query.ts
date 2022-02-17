import { Args, Resolver, Query } from '@nestjs/graphql';
import { ModelTest } from '../../model';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/strategies/jwt-auth.guard';
import { ValidationPipe } from '../../pipes/validation.pipe';
import { ModelTestResponse, ModelTestListResponse } from '../resolver-response';
import { ModelTestListInput, ModelTestSearchInput } from '../../validation/model-test/model-test.input';
import { ModuleTestService } from '../../service/module-test.service';

@Resolver(of => ModelTest)
export class ModelTestQuery {
  constructor(
    private readonly service: ModuleTestService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Query(returns => ModelTestListResponse)
  async listModelTest(
    @Args({
      name: 'body',
      type: () => ModelTestListInput,
      nullable: true
    }, new ValidationPipe()) body: ModelTestListInput
  ): Promise<ModelTestListResponse> {
    const modetTestList = await this.service.list(body)
    return {
      data: modetTestList,
      message: 'Model test list loaded'
    }
  }

  @UseGuards(JwtAuthGuard)
  @Query(returns => ModelTestResponse)
  async searchModelTest(
    @Args({
      name: 'body',
      type: () => ModelTestSearchInput,
      nullable: true
    }, new ValidationPipe()) body: ModelTestSearchInput
  ): Promise<ModelTestResponse> {
    const modetTest = await this.service.getById(body)
    return {
      data: modetTest,
      message: 'Model test loaded'
    }
  }
}