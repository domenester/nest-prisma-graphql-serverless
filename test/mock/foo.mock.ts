import { formatBody } from "../util";

export const listFooMutation = (body: any = {}) => {
  return `
    query {
      listFoo(body: ${formatBody(body)}) {
        data {
          id
        }
      }
    }`;
}

export const createFooMutation = (body: any = {}) => {
  return `
    mutation {
      createFoo(body: ${formatBody(body)}) {
        message
        data {
          id
          field
        }
      }
    }`;
}
