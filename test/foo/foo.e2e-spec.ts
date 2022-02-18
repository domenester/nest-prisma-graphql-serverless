import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import {
  listFooMutation,
  createFooMutation
} from '../mock/foo.mock';
import {PrismaClient} from '@prisma/client'
// import {PrismaService} from '../../src/service/prisma.service'

describe('Foo (e2e)', () => {
  let app: INestApplication;
  const {DATABASE_URL} = process.env
  const prisma = new PrismaClient({datasources: {db: {url: DATABASE_URL}}})
  let fooId

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule
      ],
    }).compile();

    app = moduleFixture.createNestApplication();

    await app.init();
  });

  it('should return an empty foo list', () => {
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

  it('should create foo', () => {
    const {ACCESS_TOKEN} = process.env

    return request(app.getHttpServer())
      .post('/graphql')
      .set('Authorization', `Bearer ${ACCESS_TOKEN}`)
      .send({
        operationName: null,
        query: createFooMutation({
          field: 'bar'
        }),
      })
      .expect(({body: {data: {createFoo}}}) => {
        const {data: {id, field}} = createFoo
        expect(id).toBeDefined()
        expect(field).toBe('bar')
        fooId = id
      })
  });

  it('should return a non empty foo list', () => {
    const {ACCESS_TOKEN} = process.env
    return request(app.getHttpServer())
      .post('/graphql')
      .set('Authorization', `Bearer ${ACCESS_TOKEN}`)
      .send({
        operationName: null,
        query: listFooMutation(),
      })
      .expect(({body: {data: {listFoo}}}) => {
        expect(listFoo.data.length).toBeGreaterThan(0)
      })
  });

  afterAll(async () => {
    try {
      await prisma.foo.delete({where: {id: fooId}})
    } catch (err) {
      console.log('foo afterAll error:  ', err);
    }
    await app.close();
  });
});
