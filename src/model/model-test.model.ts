import { Field, ObjectType } from '@nestjs/graphql';
import { Base } from './_base'

@ObjectType()
export class ModelTest extends Base {
  @Field()
  field: string;
}
