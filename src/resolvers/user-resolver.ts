import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { User } from "../entities/user.entity";
import { ContextType } from "../types";
import { UserInput } from "./input/user-input";

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async createUser(
    @Arg("user") userInput: UserInput,
    @Ctx() { em }: ContextType
  ): Promise<User> {
    const user = em.create(User, {
      name: userInput.name,
      email: userInput.email,
      age: userInput.age,
      born: userInput.born,
    });
    await em.persistAndFlush(user);
    return user;
  }
}
