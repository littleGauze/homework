import Koa from 'koa'
import { AppError } from '../exception/AppError'

export default function errorHandler() {
  return async function errorHandler(ctx: Koa.Context, next: Koa.Next) {
    try {
      await next()
    } catch (err: unknown) {
      if (err instanceof AppError) {
        ctx.body = {
          code: err.status,
          message: err.message,
        }
      }
    }
  }
}
