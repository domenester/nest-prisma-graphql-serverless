import { Field, ObjectType } from '@nestjs/graphql';
import { Base } from './_base'

@ObjectType()
export class Foo extends Base {
  @Field()
  field: string;
}
