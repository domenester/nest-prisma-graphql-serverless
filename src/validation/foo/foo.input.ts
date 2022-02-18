import { InputType, Field, ID } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';
import { ListInput } from '../list.input';

@InputType()
export class FooListInput extends ListInput {
  @IsOptional()
  @Field({nullable: true})
  field?: string;
}

@InputType()
export class FooSearchInput {
  @Field(type => ID)
  id: string;
}

@InputType()
export class FooCreateInput {
  @IsString()
  @Field(type => ID)
  field: string;
}
