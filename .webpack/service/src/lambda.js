/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst module_config_1 = __webpack_require__(/*! ./config/module.config */ \"./src/config/module.config.ts\");\nconst apollo_1 = __webpack_require__(/*! @nestjs/apollo */ \"@nestjs/apollo\");\nconst graphql_1 = __webpack_require__(/*! @nestjs/graphql */ \"@nestjs/graphql\");\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst foo_module_1 = __webpack_require__(/*! ./module/foo.module */ \"./src/module/foo.module.ts\");\nconst constants_1 = __webpack_require__(/*! ./auth/constants */ \"./src/auth/constants.ts\");\nconst jwt_1 = __webpack_require__(/*! @nestjs/jwt */ \"@nestjs/jwt\");\nconst jwt_strategy_1 = __webpack_require__(/*! ./auth/strategies/jwt.strategy */ \"./src/auth/strategies/jwt.strategy.ts\");\nconst { NODE_ENV } = process.env;\nlet AppModule = class AppModule {\n};\nAppModule = __decorate([\n    (0, common_1.Module)({\n        imports: [\n            (0, module_config_1.ConfigModuleForRoot)(),\n            graphql_1.GraphQLModule.forRoot(Object.assign(Object.assign(Object.assign({ autoSchemaFile: false, debug: true, playground: true }, (NODE_ENV === 'production' && {\n                typePaths: ['/var/task/src/schema.gql'],\n            })), (NODE_ENV !== 'production' && {\n                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),\n            })), { cors: {\n                    origin: true,\n                }, driver: apollo_1.ApolloDriver })),\n            jwt_1.JwtModule.register({\n                secret: constants_1.jwtConstants.secret,\n            }),\n            foo_module_1.FooModule\n        ],\n        providers: [\n            jwt_strategy_1.JwtStrategy\n        ]\n    })\n], AppModule);\nexports.AppModule = AppModule;\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/app.module.ts?");

/***/ }),

/***/ "./src/auth/constants.ts":
/*!*******************************!*\
  !*** ./src/auth/constants.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.jwtConstants = void 0;\nexports.jwtConstants = {\n    secret: 'Th!$S3crEtC4NBeCh$nG3d',\n};\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/auth/constants.ts?");

/***/ }),

/***/ "./src/auth/strategies/jwt-auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/auth/strategies/jwt-auth.guard.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.JwtAuthGuard = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst passport_1 = __webpack_require__(/*! @nestjs/passport */ \"@nestjs/passport\");\nconst graphql_1 = __webpack_require__(/*! @nestjs/graphql */ \"@nestjs/graphql\");\nlet JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {\n    getRequest(context) {\n        const ctx = graphql_1.GqlExecutionContext.create(context);\n        return ctx.getContext().req;\n    }\n};\nJwtAuthGuard = __decorate([\n    (0, common_1.Injectable)()\n], JwtAuthGuard);\nexports.JwtAuthGuard = JwtAuthGuard;\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/auth/strategies/jwt-auth.guard.ts?");

/***/ }),

/***/ "./src/auth/strategies/jwt.strategy.ts":
/*!*********************************************!*\
  !*** ./src/auth/strategies/jwt.strategy.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.JwtStrategy = void 0;\nconst passport_jwt_1 = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\nconst passport_1 = __webpack_require__(/*! @nestjs/passport */ \"@nestjs/passport\");\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst constants_1 = __webpack_require__(/*! ../constants */ \"./src/auth/constants.ts\");\nlet JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {\n    constructor() {\n        super({\n            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),\n            ignoreExpiration: true,\n            secretOrKey: constants_1.jwtConstants.secret,\n        });\n    }\n    async validate(payload) {\n        const { secret } = payload;\n        if (secret !== constants_1.jwtConstants.secret) {\n            throw new common_1.UnauthorizedException();\n        }\n        return payload;\n    }\n};\nJwtStrategy = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [])\n], JwtStrategy);\nexports.JwtStrategy = JwtStrategy;\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/auth/strategies/jwt.strategy.ts?");

/***/ }),

/***/ "./src/config/module.config.ts":
/*!*************************************!*\
  !*** ./src/config/module.config.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ConfigModuleForRoot = void 0;\nconst config_1 = __webpack_require__(/*! @nestjs/config */ \"@nestjs/config\");\nconst ConfigModuleForRoot = () => {\n    const { NODE_ENV } = process.env;\n    return config_1.ConfigModule.forRoot({\n        envFilePath: NODE_ENV === 'production' ? `${process.cwd()}/.env` : `${process.cwd()}/.env.${NODE_ENV}`,\n        isGlobal: true\n    });\n};\nexports.ConfigModuleForRoot = ConfigModuleForRoot;\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/config/module.config.ts?");

/***/ }),

/***/ "./src/graphql/mutation/foo.mutation.ts":
/*!**********************************************!*\
  !*** ./src/graphql/mutation/foo.mutation.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar _a, _b, _c;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FooMutation = void 0;\nconst graphql_1 = __webpack_require__(/*! @nestjs/graphql */ \"@nestjs/graphql\");\nconst model_1 = __webpack_require__(/*! ../../model */ \"./src/model/index.ts\");\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst jwt_auth_guard_1 = __webpack_require__(/*! ../../auth/strategies/jwt-auth.guard */ \"./src/auth/strategies/jwt-auth.guard.ts\");\nconst validation_pipe_1 = __webpack_require__(/*! ../../pipes/validation.pipe */ \"./src/pipes/validation.pipe.ts\");\nconst resolver_response_1 = __webpack_require__(/*! ../resolver-response */ \"./src/graphql/resolver-response.ts\");\nconst foo_input_1 = __webpack_require__(/*! ../../validation/foo/foo.input */ \"./src/validation/foo/foo.input.ts\");\nconst module_test_service_1 = __webpack_require__(/*! ../../service/module-test.service */ \"./src/service/module-test.service.ts\");\nlet FooMutation = class FooMutation {\n    constructor(service) {\n        this.service = service;\n    }\n    async createFoo(body) {\n        const foo = await this.service.create(body);\n        return {\n            message: 'Foo created.',\n            data: foo\n        };\n    }\n};\n__decorate([\n    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),\n    (0, graphql_1.Mutation)(returns => resolver_response_1.FooResponse),\n    __param(0, (0, graphql_1.Args)('body', new validation_pipe_1.ValidationPipe())),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [typeof (_a = typeof foo_input_1.FooCreateInput !== \"undefined\" && foo_input_1.FooCreateInput) === \"function\" ? _a : Object]),\n    __metadata(\"design:returntype\", typeof (_b = typeof Promise !== \"undefined\" && Promise) === \"function\" ? _b : Object)\n], FooMutation.prototype, \"createFoo\", null);\nFooMutation = __decorate([\n    (0, graphql_1.Resolver)(of => model_1.Foo),\n    __metadata(\"design:paramtypes\", [typeof (_c = typeof module_test_service_1.ModuleTestService !== \"undefined\" && module_test_service_1.ModuleTestService) === \"function\" ? _c : Object])\n], FooMutation);\nexports.FooMutation = FooMutation;\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/graphql/mutation/foo.mutation.ts?");

/***/ }),

/***/ "./src/graphql/query/foo.query.ts":
/*!****************************************!*\
  !*** ./src/graphql/query/foo.query.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar _a, _b, _c, _d, _e;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FooQuery = void 0;\nconst graphql_1 = __webpack_require__(/*! @nestjs/graphql */ \"@nestjs/graphql\");\nconst model_1 = __webpack_require__(/*! ../../model */ \"./src/model/index.ts\");\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst jwt_auth_guard_1 = __webpack_require__(/*! ../../auth/strategies/jwt-auth.guard */ \"./src/auth/strategies/jwt-auth.guard.ts\");\nconst validation_pipe_1 = __webpack_require__(/*! ../../pipes/validation.pipe */ \"./src/pipes/validation.pipe.ts\");\nconst resolver_response_1 = __webpack_require__(/*! ../resolver-response */ \"./src/graphql/resolver-response.ts\");\nconst foo_input_1 = __webpack_require__(/*! ../../validation/foo/foo.input */ \"./src/validation/foo/foo.input.ts\");\nconst module_test_service_1 = __webpack_require__(/*! ../../service/module-test.service */ \"./src/service/module-test.service.ts\");\nlet FooQuery = class FooQuery {\n    constructor(service) {\n        this.service = service;\n    }\n    async listFoo(body) {\n        const modetTestList = await this.service.list(body);\n        return {\n            data: modetTestList,\n            message: 'Model test list loaded'\n        };\n    }\n    async searchFoo(body) {\n        const modetTest = await this.service.getById(body);\n        return {\n            data: modetTest,\n            message: 'Model test loaded'\n        };\n    }\n};\n__decorate([\n    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),\n    (0, graphql_1.Query)(returns => resolver_response_1.FooListResponse),\n    __param(0, (0, graphql_1.Args)({\n        name: 'body',\n        type: () => foo_input_1.FooListInput,\n        nullable: true\n    }, new validation_pipe_1.ValidationPipe())),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [typeof (_a = typeof foo_input_1.FooListInput !== \"undefined\" && foo_input_1.FooListInput) === \"function\" ? _a : Object]),\n    __metadata(\"design:returntype\", typeof (_b = typeof Promise !== \"undefined\" && Promise) === \"function\" ? _b : Object)\n], FooQuery.prototype, \"listFoo\", null);\n__decorate([\n    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),\n    (0, graphql_1.Query)(returns => resolver_response_1.FooResponse),\n    __param(0, (0, graphql_1.Args)({\n        name: 'body',\n        type: () => foo_input_1.FooSearchInput,\n        nullable: true\n    }, new validation_pipe_1.ValidationPipe())),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [typeof (_c = typeof foo_input_1.FooSearchInput !== \"undefined\" && foo_input_1.FooSearchInput) === \"function\" ? _c : Object]),\n    __metadata(\"design:returntype\", typeof (_d = typeof Promise !== \"undefined\" && Promise) === \"function\" ? _d : Object)\n], FooQuery.prototype, \"searchFoo\", null);\nFooQuery = __decorate([\n    (0, graphql_1.Resolver)(of => model_1.Foo),\n    __metadata(\"design:paramtypes\", [typeof (_e = typeof module_test_service_1.ModuleTestService !== \"undefined\" && module_test_service_1.ModuleTestService) === \"function\" ? _e : Object])\n], FooQuery);\nexports.FooQuery = FooQuery;\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/graphql/query/foo.query.ts?");

/***/ }),

/***/ "./src/graphql/resolver-response.ts":
/*!******************************************!*\
  !*** ./src/graphql/resolver-response.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FooListResponse = exports.FooResponse = void 0;\nconst graphql_1 = __webpack_require__(/*! @nestjs/graphql */ \"@nestjs/graphql\");\nconst model_1 = __webpack_require__(/*! ../model */ \"./src/model/index.ts\");\nconst api_response_util_1 = __webpack_require__(/*! ../util/api-response.util */ \"./src/util/api-response.util.ts\");\nlet FooResponse = class FooResponse extends (0, api_response_util_1.ApiResponseData)(model_1.Foo) {\n};\nFooResponse = __decorate([\n    (0, graphql_1.ObjectType)()\n], FooResponse);\nexports.FooResponse = FooResponse;\nlet FooListResponse = class FooListResponse extends (0, api_response_util_1.ApiResponseDataList)([model_1.Foo]) {\n};\nFooListResponse = __decorate([\n    (0, graphql_1.ObjectType)()\n], FooListResponse);\nexports.FooListResponse = FooListResponse;\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/graphql/resolver-response.ts?");

/***/ }),

/***/ "./src/graphql/resolver/foo.resolver.ts":
/*!**********************************************!*\
  !*** ./src/graphql/resolver/foo.resolver.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar _a;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FooResolver = void 0;\nconst graphql_1 = __webpack_require__(/*! @nestjs/graphql */ \"@nestjs/graphql\");\nconst model_1 = __webpack_require__(/*! ../../model */ \"./src/model/index.ts\");\nlet FooResolver = class FooResolver {\n    constructor() { }\n    field(foo) {\n        const { field } = foo;\n        return field ? field : 'Field with no value';\n    }\n};\n__decorate([\n    (0, graphql_1.ResolveField)(),\n    __param(0, (0, graphql_1.Parent)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [typeof (_a = typeof model_1.Foo !== \"undefined\" && model_1.Foo) === \"function\" ? _a : Object]),\n    __metadata(\"design:returntype\", void 0)\n], FooResolver.prototype, \"field\", null);\nFooResolver = __decorate([\n    (0, graphql_1.Resolver)(of => model_1.Foo),\n    __metadata(\"design:paramtypes\", [])\n], FooResolver);\nexports.FooResolver = FooResolver;\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/graphql/resolver/foo.resolver.ts?");

/***/ }),

/***/ "./src/lambda.ts":
/*!***********************!*\
  !*** ./src/lambda.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.handler = void 0;\nconst aws_serverless_express_1 = __webpack_require__(/*! aws-serverless-express */ \"aws-serverless-express\");\nconst middleware_1 = __webpack_require__(/*! aws-serverless-express/middleware */ \"aws-serverless-express/middleware\");\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nconst platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ \"@nestjs/platform-express\");\nconst app_module_1 = __webpack_require__(/*! ./app.module */ \"./src/app.module.ts\");\nconst cors_1 = __webpack_require__(/*! ./middleware/cors */ \"./src/middleware/cors.ts\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst binaryMimeTypes = [];\nlet cachedServer;\nasync function bootstrapServer() {\n    if (!cachedServer) {\n        const expressApp = express();\n        const nestApp = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressApp));\n        nestApp.use((0, middleware_1.eventContext)());\n        nestApp.enableCors({ origin: true });\n        nestApp.use(cors_1.default);\n        await nestApp.init();\n        cachedServer = (0, aws_serverless_express_1.createServer)(expressApp, undefined, binaryMimeTypes);\n    }\n    return cachedServer;\n}\nconst handler = async (event, context) => {\n    cachedServer = await bootstrapServer();\n    return (0, aws_serverless_express_1.proxy)(cachedServer, event, context, 'PROMISE').promise;\n};\nexports.handler = handler;\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/lambda.ts?");

/***/ }),

/***/ "./src/middleware/cors.ts":
/*!********************************!*\
  !*** ./src/middleware/cors.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst parseIp = (req) => {\n    var _a, _b;\n    return ((_a = req.headers['x-forwarded-for']) === null || _a === void 0 ? void 0 : _a.split(',').shift())\n        || ((_b = req.socket) === null || _b === void 0 ? void 0 : _b.remoteAddress);\n};\nconst cors = (req, res, next) => {\n    const { NODE_ENV } = process.env;\n    const allowedOrigins = [];\n    if (NODE_ENV === 'production') {\n        const origin = req.headers.origin;\n        res.header('Access-Control-Allow-Origin', origin);\n    }\n    else {\n        res.header('Access-Control-Allow-Origin', '*');\n    }\n    res.header('Access-Control-Allow-Headers', '*');\n    res.statusCode = 200;\n    next();\n};\nexports.default = cors;\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/middleware/cors.ts?");

/***/ }),

/***/ "./src/model/_base.ts":
/*!****************************!*\
  !*** ./src/model/_base.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar _a, _b, _c;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Base = void 0;\nconst graphql_1 = __webpack_require__(/*! @nestjs/graphql */ \"@nestjs/graphql\");\nlet Base = class Base {\n};\n__decorate([\n    (0, graphql_1.Field)(type => graphql_1.ID),\n    __metadata(\"design:type\", String)\n], Base.prototype, \"id\", void 0);\n__decorate([\n    (0, graphql_1.Field)(type => graphql_1.GraphQLISODateTime),\n    __metadata(\"design:type\", typeof (_a = typeof Date !== \"undefined\" && Date) === \"function\" ? _a : Object)\n], Base.prototype, \"createdAt\", void 0);\n__decorate([\n    (0, graphql_1.Field)(type => graphql_1.GraphQLISODateTime),\n    __metadata(\"design:type\", typeof (_b = typeof Date !== \"undefined\" && Date) === \"function\" ? _b : Object)\n], Base.prototype, \"updatedAt\", void 0);\n__decorate([\n    (0, graphql_1.Field)(type => graphql_1.GraphQLISODateTime),\n    __metadata(\"design:type\", typeof (_c = typeof Date !== \"undefined\" && Date) === \"function\" ? _c : Object)\n], Base.prototype, \"deletedAt\", void 0);\nBase = __decorate([\n    (0, graphql_1.ObjectType)()\n], Base);\nexports.Base = Base;\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/model/_base.ts?");

/***/ }),

/***/ "./src/model/foo.model.ts":
/*!********************************!*\
  !*** ./src/model/foo.model.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Foo = void 0;\nconst graphql_1 = __webpack_require__(/*! @nestjs/graphql */ \"@nestjs/graphql\");\nconst _base_1 = __webpack_require__(/*! ./_base */ \"./src/model/_base.ts\");\nlet Foo = class Foo extends _base_1.Base {\n};\n__decorate([\n    (0, graphql_1.Field)(),\n    __metadata(\"design:type\", String)\n], Foo.prototype, \"field\", void 0);\nFoo = __decorate([\n    (0, graphql_1.ObjectType)()\n], Foo);\nexports.Foo = Foo;\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/model/foo.model.ts?");

/***/ }),

/***/ "./src/model/index.ts":
/*!****************************!*\
  !*** ./src/model/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./foo.model */ \"./src/model/foo.model.ts\"), exports);\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/model/index.ts?");

/***/ }),

/***/ "./src/module/foo.module.ts":
/*!**********************************!*\
  !*** ./src/module/foo.module.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FooModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst foo_mutation_1 = __webpack_require__(/*! ../graphql/mutation/foo.mutation */ \"./src/graphql/mutation/foo.mutation.ts\");\nconst foo_query_1 = __webpack_require__(/*! ../graphql/query/foo.query */ \"./src/graphql/query/foo.query.ts\");\nconst foo_resolver_1 = __webpack_require__(/*! ../graphql/resolver/foo.resolver */ \"./src/graphql/resolver/foo.resolver.ts\");\nconst module_test_service_1 = __webpack_require__(/*! ../service/module-test.service */ \"./src/service/module-test.service.ts\");\nconst prisma_module_1 = __webpack_require__(/*! ./prisma.module */ \"./src/module/prisma.module.ts\");\nlet FooModule = class FooModule {\n};\nFooModule = __decorate([\n    (0, common_1.Module)({\n        imports: [\n            prisma_module_1.PrismaModule\n        ],\n        providers: [\n            foo_query_1.FooQuery,\n            foo_mutation_1.FooMutation,\n            foo_resolver_1.FooResolver,\n            module_test_service_1.ModuleTestService,\n        ],\n        exports: [\n            module_test_service_1.ModuleTestService\n        ]\n    })\n], FooModule);\nexports.FooModule = FooModule;\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/module/foo.module.ts?");

/***/ }),

/***/ "./src/module/prisma.module.ts":
/*!*************************************!*\
  !*** ./src/module/prisma.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PrismaModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst module_config_1 = __webpack_require__(/*! ../config/module.config */ \"./src/config/module.config.ts\");\nconst prisma_service_1 = __webpack_require__(/*! ../service/prisma.service */ \"./src/service/prisma.service.ts\");\nlet PrismaModule = class PrismaModule {\n};\nPrismaModule = __decorate([\n    (0, common_1.Module)({\n        imports: [\n            (0, module_config_1.ConfigModuleForRoot)(),\n        ],\n        providers: [prisma_service_1.PrismaService],\n        exports: [prisma_service_1.PrismaService]\n    })\n], PrismaModule);\nexports.PrismaModule = PrismaModule;\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/module/prisma.module.ts?");

/***/ }),

/***/ "./src/pipes/validation.pipe.ts":
/*!**************************************!*\
  !*** ./src/pipes/validation.pipe.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.exceptionFactory = exports.ValidationPipe = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\nconst class_transformer_1 = __webpack_require__(/*! class-transformer */ \"class-transformer\");\nlet ValidationPipe = class ValidationPipe {\n    async transform(value, { metatype }) {\n        const object = (0, class_transformer_1.plainToClass)(metatype, value);\n        const errors = await (0, class_validator_1.validate)(object, {\n            whitelist: true,\n            forbidNonWhitelisted: true\n        });\n        if (errors.length > 0) {\n            let messages = [];\n            errors.forEach(error => messages = [...messages, ...Object.values(error.constraints)]);\n            throw new common_1.BadRequestException(messages);\n        }\n        return value;\n    }\n};\nValidationPipe = __decorate([\n    (0, common_1.Injectable)()\n], ValidationPipe);\nexports.ValidationPipe = ValidationPipe;\nconst exceptionFactory = (validationErrors = []) => {\n    const messages = [];\n    validationErrors.map((error) => {\n        var _a;\n        if ((_a = error === null || error === void 0 ? void 0 : error.children) === null || _a === void 0 ? void 0 : _a.length) {\n            error === null || error === void 0 ? void 0 : error.children.map(({ constraints }) => {\n                if (Object.keys(constraints).length > 0) {\n                    Object.keys(constraints).map(key => {\n                        messages.push(constraints[key]);\n                    });\n                }\n            });\n        }\n        if (Object.keys((error === null || error === void 0 ? void 0 : error.constraints) || {}).length) {\n            Object.keys(error === null || error === void 0 ? void 0 : error.constraints).map((key) => {\n                messages.push(error.constraints[key]);\n            });\n        }\n    });\n    return new common_1.BadRequestException({ message: messages.join(', ') });\n};\nexports.exceptionFactory = exceptionFactory;\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/pipes/validation.pipe.ts?");

/***/ }),

/***/ "./src/service/module-test.service.ts":
/*!********************************************!*\
  !*** ./src/service/module-test.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar _a;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ModuleTestService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst prisma_service_1 = __webpack_require__(/*! ./prisma.service */ \"./src/service/prisma.service.ts\");\nlet ModuleTestService = class ModuleTestService {\n    constructor(prisma) {\n        this.prisma = prisma;\n    }\n    getById(body) {\n        return this.prisma.foo.findFirst({\n            where: { id: body.id }\n        });\n    }\n    list(body) {\n        const { field } = body;\n        return this.prisma.foo.findMany(Object.assign({}, (field && { where: { field } })));\n    }\n    create(data) {\n        return this.prisma.foo.create({ data });\n    }\n};\nModuleTestService = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [typeof (_a = typeof prisma_service_1.PrismaService !== \"undefined\" && prisma_service_1.PrismaService) === \"function\" ? _a : Object])\n], ModuleTestService);\nexports.ModuleTestService = ModuleTestService;\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/service/module-test.service.ts?");

/***/ }),

/***/ "./src/service/prisma.service.ts":
/*!***************************************!*\
  !*** ./src/service/prisma.service.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PrismaService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst client_1 = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nlet PrismaService = class PrismaService extends client_1.PrismaClient {\n    async onModuleInit() {\n        await this.$connect();\n    }\n    async enableShutdownHooks(app) {\n        this.$on('beforeExit', async () => {\n            await app.close();\n        });\n    }\n};\nPrismaService = __decorate([\n    (0, common_1.Injectable)()\n], PrismaService);\nexports.PrismaService = PrismaService;\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/service/prisma.service.ts?");

/***/ }),

/***/ "./src/util/api-response.util.ts":
/*!***************************************!*\
  !*** ./src/util/api-response.util.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ApiResponseDataList = exports.ApiResponseData = void 0;\nconst graphql_1 = __webpack_require__(/*! @nestjs/graphql */ \"@nestjs/graphql\");\nfunction ApiResponseData(classRef) {\n    let ApiResponseType = class ApiResponseType {\n    };\n    __decorate([\n        (0, graphql_1.Field)({ nullable: true }),\n        __metadata(\"design:type\", String)\n    ], ApiResponseType.prototype, \"message\", void 0);\n    __decorate([\n        (0, graphql_1.Field)(type => classRef, { nullable: true }),\n        __metadata(\"design:type\", Object)\n    ], ApiResponseType.prototype, \"data\", void 0);\n    ApiResponseType = __decorate([\n        (0, graphql_1.ObjectType)({ isAbstract: true })\n    ], ApiResponseType);\n    return ApiResponseType;\n}\nexports.ApiResponseData = ApiResponseData;\nfunction ApiResponseDataList(classRef) {\n    let ApiResponseType = class ApiResponseType {\n    };\n    __decorate([\n        (0, graphql_1.Field)({ nullable: true }),\n        __metadata(\"design:type\", String)\n    ], ApiResponseType.prototype, \"message\", void 0);\n    __decorate([\n        (0, graphql_1.Field)(type => classRef, { nullable: true }),\n        __metadata(\"design:type\", Array)\n    ], ApiResponseType.prototype, \"data\", void 0);\n    ApiResponseType = __decorate([\n        (0, graphql_1.ObjectType)({ isAbstract: true })\n    ], ApiResponseType);\n    return ApiResponseType;\n}\nexports.ApiResponseDataList = ApiResponseDataList;\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/util/api-response.util.ts?");

/***/ }),

/***/ "./src/validation/foo/foo.input.ts":
/*!*****************************************!*\
  !*** ./src/validation/foo/foo.input.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FooCreateInput = exports.FooSearchInput = exports.FooListInput = void 0;\nconst graphql_1 = __webpack_require__(/*! @nestjs/graphql */ \"@nestjs/graphql\");\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\nconst list_input_1 = __webpack_require__(/*! ../list.input */ \"./src/validation/list.input.ts\");\nlet FooListInput = class FooListInput extends list_input_1.ListInput {\n};\n__decorate([\n    (0, class_validator_1.IsOptional)(),\n    (0, graphql_1.Field)({ nullable: true }),\n    __metadata(\"design:type\", String)\n], FooListInput.prototype, \"field\", void 0);\nFooListInput = __decorate([\n    (0, graphql_1.InputType)()\n], FooListInput);\nexports.FooListInput = FooListInput;\nlet FooSearchInput = class FooSearchInput {\n};\n__decorate([\n    (0, graphql_1.Field)(type => graphql_1.ID),\n    __metadata(\"design:type\", String)\n], FooSearchInput.prototype, \"id\", void 0);\nFooSearchInput = __decorate([\n    (0, graphql_1.InputType)()\n], FooSearchInput);\nexports.FooSearchInput = FooSearchInput;\nlet FooCreateInput = class FooCreateInput {\n};\n__decorate([\n    (0, class_validator_1.IsString)(),\n    (0, graphql_1.Field)(type => graphql_1.ID),\n    __metadata(\"design:type\", String)\n], FooCreateInput.prototype, \"field\", void 0);\nFooCreateInput = __decorate([\n    (0, graphql_1.InputType)()\n], FooCreateInput);\nexports.FooCreateInput = FooCreateInput;\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/validation/foo/foo.input.ts?");

/***/ }),

/***/ "./src/validation/list.input.ts":
/*!**************************************!*\
  !*** ./src/validation/list.input.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ListInput = void 0;\nconst graphql_1 = __webpack_require__(/*! @nestjs/graphql */ \"@nestjs/graphql\");\nconst class_validator_1 = __webpack_require__(/*! class-validator */ \"class-validator\");\nlet ListInput = class ListInput {\n};\n__decorate([\n    (0, class_validator_1.IsOptional)(),\n    (0, graphql_1.Field)({ nullable: true }),\n    __metadata(\"design:type\", Number)\n], ListInput.prototype, \"take\", void 0);\n__decorate([\n    (0, class_validator_1.IsOptional)(),\n    (0, graphql_1.Field)({ nullable: true }),\n    __metadata(\"design:type\", Number)\n], ListInput.prototype, \"skip\", void 0);\nListInput = __decorate([\n    (0, graphql_1.InputType)()\n], ListInput);\nexports.ListInput = ListInput;\n\n\n//# sourceURL=webpack://nest-prisma-graphql-serverless/./src/validation/list.input.ts?");

/***/ }),

/***/ "@nestjs/apollo":
/*!*********************************!*\
  !*** external "@nestjs/apollo" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/graphql":
/*!**********************************!*\
  !*** external "@nestjs/graphql" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "aws-serverless-express":
/*!*****************************************!*\
  !*** external "aws-serverless-express" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("aws-serverless-express");

/***/ }),

/***/ "aws-serverless-express/middleware":
/*!****************************************************!*\
  !*** external "aws-serverless-express/middleware" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("aws-serverless-express/middleware");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/lambda.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;