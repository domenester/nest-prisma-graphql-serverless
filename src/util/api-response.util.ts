import { Type } from '@nestjs/common';
import { Field, ObjectType } from "@nestjs/graphql";

export interface IApiResponseDataType<T> {
  message: string;
  data: T;
}

export interface IApiResponseDataListType<T> {
  message: string;
  data: T[];
}

export function ApiResponseData<T>(classRef: Type<T>): Type<IApiResponseDataType<T>> {
  @ObjectType({ isAbstract: true })
  abstract class ApiResponseType implements IApiResponseDataType <T> {
    @Field({nullable: true})
    message: string
    @Field(
      type => classRef,
      {nullable: true}
    )
    data: T
  }
  return ApiResponseType as Type<IApiResponseDataType<T>>;
}

export function ApiResponseDataList<T>(classRef: [Type<T>]): Type<IApiResponseDataListType<T>> {
  @ObjectType({ isAbstract: true })
  abstract class ApiResponseType implements IApiResponseDataListType <T> {
    @Field({nullable: true})
    message: string
    @Field(
      type => classRef,
      {nullable: true}
    )
    data: T[]
  }
  return ApiResponseType as Type<IApiResponseDataListType<T>>;
}
