import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { koaMiddleware } from '@as-integrations/koa'
import http from 'http'
import { parsetimeService } from '../parsetime'

// The GraphQL schema
const typeDefs = `#graphql

  type DateParsed {
    hour: Int!
    minute: Int!
    second: Int!
  }

  type Unixtime {
    unixtime: Float!
  }

  type Query {
    parsetime(iso: String!): DateParsed!
    unixtime(iso: String!): Unixtime!
  }
`

export interface IParams {
  iso: string
}

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    parsetime: (parent: unknown, args: IParams) => parsetimeService.parsetime(args.iso),
    unixtime: (parent: unknown, args: IParams) => parsetimeService.unixtime(args.iso),
  },
}

export async function graphql(httpServer: http.Server) {
  // Set up Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })

  await server.start()

  return koaMiddleware(server)
}
