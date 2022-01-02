import { Arg, Query, Resolver } from "type-graphql";

@Resolver()
export class HelloResolver {
  @Query(() => String)
  sayHello() {
    return "Hello!";
  }

  @Query(() => String)
  sayHelloName(@Arg("name") nameInput: string) {
    return `Hello, ${nameInput}!`;
  }
}
