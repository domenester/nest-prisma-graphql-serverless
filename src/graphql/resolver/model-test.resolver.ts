import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { ModelTest } from '../../model';

@Resolver(of => ModelTest)
export class ModelTestResolver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @ResolveField()
  field(
    @Parent() modelTest: ModelTest
  ) {
    const {field} = modelTest
    return field ? field : 'Field with no value'
  }
}