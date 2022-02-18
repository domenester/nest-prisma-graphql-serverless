import { Module } from '@nestjs/common';
import { ConfigModuleForRoot } from './config/module.config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { FooModule } from './module/foo.module';
import { jwtConstants } from './auth/constants';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/strategies/jwt.strategy';

const {NODE_ENV} = process.env

@Module({
  imports: [
    ConfigModuleForRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: false,
      debug: true,
      ...(NODE_ENV === 'production' && {
        typePaths: ['/var/task/src/schema.gql'],
      }),
      ...(NODE_ENV !== 'production' && {
        playground: true,
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      }),
      cors: {
        origin: true,
      },
      driver: ApolloDriver
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
    }),
    FooModule
  ],
  providers: [
    JwtStrategy
  ]
})
export class AppModule {}
