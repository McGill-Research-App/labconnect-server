import { User } from "../../entities/user.entity"
import { Field, InputType } from "type-graphql";

@InputType()
export class UserInput implements Partial<User> {
    @Field()
    name: string;
  
    @Field()
    email: string;
  
    @Field({ nullable: true })
    age?: number;
  
    @Field({ nullable: true })
    born?: Date;
}