import { ObjectType } from "@nestjs/graphql";
import { Foo } from "../model";
import { ApiResponseData, ApiResponseDataList } from "../util/api-response.util";

@ObjectType()
export class FooResponse extends ApiResponseData(Foo) {}

@ObjectType()
export class FooListResponse extends ApiResponseDataList([Foo]) {}
