import { ObjectType } from "@nestjs/graphql";
import { ModelTest } from "../model";
import { ApiResponseData, ApiResponseDataList } from "../util/api-response.util";

@ObjectType()
export class ModelTestResponse extends ApiResponseData(ModelTest) {}

@ObjectType()
export class ModelTestListResponse extends ApiResponseDataList([ModelTest]) {}
