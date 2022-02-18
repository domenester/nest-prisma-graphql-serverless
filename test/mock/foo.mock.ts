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
