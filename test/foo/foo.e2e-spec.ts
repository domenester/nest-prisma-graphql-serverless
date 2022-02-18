import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { listFooMutation } from '../mock/foo.mock';

describe('Foo (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule
      ],
    }).compile();

    app = moduleFixture.createNestApplication();

    await app.init();
  });

  it('should list foo', () => {
    const {ACCESS_TOKEN} = process.env
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Authorization', `Bearer ${ACCESS_TOKEN}`)
      .send({
        operationName: null,
        query: listFooMutation(),
      })
      .expect(({body: {data: {listFoo}}}) => {
        expect(listFoo.data.length).toBe(0)
      })
  });
});
