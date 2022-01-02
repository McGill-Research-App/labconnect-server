import { MikroORM } from "@mikro-orm/core";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core/dist/plugin/landingPage/graphqlPlayground";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { seedDatabase } from "./helpers";
import mikroOrmConfig from "./mikro-orm.config";
import { HelloResolver } from "./resolvers/hello-resolver";
import { PostingResolver } from "./resolvers/posting-resolver";
import { UserResolver } from "./resolvers/user-resolver";

const main = async () => {
  console.log(`Initializing database connection...`);
  const orm = await MikroORM.init(mikroOrmConfig);

  console.log(`Setting up and cleaning the database...`);
  const generator = orm.getSchemaGenerator();
  await generator.dropSchema();
  await generator.createSchema();
  await generator.updateSchema();
  const { defaultUser } = await seedDatabase(orm.em);

  console.log(`Bootstrapping schema and server...`);
  const app = express();
  // const corsRequestHandler = cors(corsConfig);
  // app.use(corsRequestHandler);

  // Redis

  // Create GraphQL endpoint on Express
  const apolloServer = new ApolloServer({
    // Build TypeGraphQL executable schema
    schema: await buildSchema({
      resolvers: [HelloResolver, PostingResolver, UserResolver],
      validate: false,
      emitSchemaFile: true,
    }),
    context: () => ({
      em: orm.em,
      user: defaultUser,
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await apolloServer.start();

  // Mount Apollo middleware to Express
  apolloServer.applyMiddleware({
    app,
    path: "/", // default path: "/graphql"
  });

  // Start server
  await new Promise<void>((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(
    `🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`
  );
};

main().catch((err) => {
  console.log(err);
});
