import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common'
import { validate, ValidationError } from 'class-validator'
import { plainToClass } from 'class-transformer'

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(
    value: any,
    { metatype }: ArgumentMetadata
  ): Promise<any> {
    const object = plainToClass(metatype, value)
    const errors = await validate(
      object, {
        whitelist: true,
        forbidNonWhitelisted: true
      }
    )

    if (errors.length > 0) {
      let messages = []
      errors.forEach(
        error => messages = [...messages, ...Object.values(error.constraints)]
      )
      throw new BadRequestException(messages)
    }
    return value
  }
}

export const exceptionFactory = (validationErrors: ValidationError[] = []) => {
  const messages = [];
  validationErrors.map((error: any) => {
    if (error?.children?.length) {
      error?.children.map(({constraints}) => {
        if (Object.keys(constraints).length > 0) {
          Object.keys(constraints).map(key => {
            messages.push(constraints[key])
          })
        }
      })
    }
    if (Object.keys(error?.constraints || {}).length) {
      Object.keys(error?.constraints).map((key) => {
        messages.push(error.constraints[key])
      })
    }
  })
  return new BadRequestException({message: messages.join(', ')});
}