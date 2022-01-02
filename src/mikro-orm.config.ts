import { MikroORM, ReflectMetadataProvider } from "@mikro-orm/core";
import path from "path";
import { __prod__ } from "./constants";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to migrations directory
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files (.ts, .js)
  },
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  dbName: "labconnect",
  type: "postgresql",
  debug: !__prod__,
  metadataProvider: ReflectMetadataProvider,
} as Parameters<typeof MikroORM.init>[0];
