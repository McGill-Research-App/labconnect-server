import { User } from "../entities/user.entity";
import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";
import { Posting } from "../entities/posting.entity";
import { ContextType } from "../types";

@Resolver(Posting)
export class PostingResolver {
  @Query(() => [Posting])
  getPostings(@Ctx() { em }: ContextType): Promise<Posting[]> {
    return em.find(Posting, {});
  }

  @Query(() => Posting, { nullable: true })
  getPosting(
    @Arg("postingId", () => Int) postingId: number,
    @Ctx() { em }: ContextType
  ) {
    return em.findOne(Posting, postingId);
  }

  @Mutation(() => Posting)
  async createPosting(
    @Arg("title") title: string,
    @Ctx() { user, em }: ContextType
  ): Promise<Posting> {
    const posting = em.create(Posting, {
      title: title,
      author: em.getReference(User, user.id)
    });
    await em.persistAndFlush(posting);
    return posting;
  }
}
