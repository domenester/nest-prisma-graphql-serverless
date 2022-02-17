import { InputType, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class ListInput {
  @IsOptional()
  @Field({nullable: true})
  take?: number;

  @IsOptional()
  @Field({nullable: true})
  skip?: number;
}