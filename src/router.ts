import Router from '@koa/router'
import Koa from 'koa'
import { parsetimeService } from './service/parsetime'

const router = new Router()

router.prefix('/api')

router.get('/', async () => {
  return 'Hello, world!'
})

router.get('/parsetime', async (ctx: Koa.Context) => {
  ctx.body = parsetimeService.parsetime(ctx.query.iso as string)
})

router.get('/unixtime', async (ctx: Koa.Context) => {
  ctx.body = parsetimeService.unixtime(ctx.query.iso as string)
})

export default router
