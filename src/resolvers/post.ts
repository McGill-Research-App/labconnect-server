import { Post } from "src/entities/Post";
import { MyContext } from "src/types";
import { Arg, Ctx, Query, Resolver } from "type-graphql";

@Resolver()
export class PostResolver {

    /**
     * Get all posts
     * @returns list of `Post`s
     */
    @Query(() => [Post])
    posts(
        @Ctx() { em }: MyContext
    ): Promise<Post[]> {
        return em.find(Post, {});
    }

    // @Query(() => Post)
    // findPost(
    //     @Arg()
    // )
}
