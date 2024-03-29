
import path from 'path';
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from './entities/Post';
import { User } from './entities/User';

export default {
    migrations: {
        path: path.join(__dirname, './migrations'), // path to migrations directory
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files (.ts, .js)
      },
    entities: [Post, User],
    dbName: "labconnect",
    type: "postgresql",
    debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];