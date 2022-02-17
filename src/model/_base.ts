import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Base {
  @Field(type => ID)
  id: string;

  @Field(type => GraphQLISODateTime)
  createdAt: Date;

  @Field(type => GraphQLISODateTime)
  updatedAt: Date;

  @Field(type => GraphQLISODateTime)
  deletedAt?: Date
}
