import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Foo } from '../../model';

@Resolver(() => Foo)
export class FooResolver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @ResolveField()
  field(
    @Parent() foo: Foo
  ) {
    const {field} = foo
    return field ? field : 'Field with no value'
  }
}