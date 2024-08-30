import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import http from 'http'
import { graphql } from './service/graphql'

// import config from "./config";
import router from './router'
import errorHandler from './middleware/errorHandler'

// get port from argv
const argv = process.argv

const port = argv[2] || 3000

const app = new Koa()
const httpServer = http.createServer(app.callback())

async function main() {
  app.use(cors())
  app.use(bodyParser())
  app.use(errorHandler())
  app.use(router.routes() as Koa.Middleware)
  app.use(router.allowedMethods() as Koa.Middleware)

  // use the graphql middleware
  const graphqlMiddleware = await graphql(httpServer)
  app.use(graphqlMiddleware)

  httpServer.listen({ port }, () => {
    console.log(`🚀 Server ready at port ${port}`)
  })
}

main()
