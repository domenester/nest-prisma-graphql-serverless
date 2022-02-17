import { Args, Resolver, Mutation } from '@nestjs/graphql';
import { ModelTest } from '../../model';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/strategies/jwt-auth.guard';
import { ValidationPipe } from '../../pipes/validation.pipe';
import { ModelTestResponse } from '../resolver-response';
import { ModelTestCreateInput } from '../../validation/model-test/model-test.input';
import { ModuleTestService } from '../../service/module-test.service';

@Resolver(of => ModelTest)
export class ModelTestMutation {
  constructor(
    private service: ModuleTestService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(returns => ModelTestResponse)
  async createModelTest(
    @Args('body', new ValidationPipe()) body: ModelTestCreateInput
  ): Promise<ModelTestResponse> {
    const modelTest = await this.service.create(body)
    return {
      message: 'Model Test created.',
      data: modelTest
    }
  }
}