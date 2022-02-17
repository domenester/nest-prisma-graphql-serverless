import { InputType, Field, ID } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';
import { ListInput } from '../list.input';

@InputType()
export class ModelTestListInput extends ListInput {
  @IsOptional()
  @Field({nullable: true})
  field?: string;
}

@InputType()
export class ModelTestSearchInput {
  @Field(type => ID)
  id: string;
}

@InputType()
export class ModelTestCreateInput {
  @IsString()
  @Field(type => ID)
  field: string;
}
