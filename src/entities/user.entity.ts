import { Entity, EntityManager, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import { Base } from "../utils/entities/base.entity";
import UserValidator from "../contracts/user.validator";

@ObjectType()
@Entity()
export class User extends Base<User> {
  @Field()
  @Property()
  name: string;

  @Field()
  @Property()
  email: string;

  @Field({ nullable: true })
  @Property({ nullable: true })
  age?: number;

  @Field({ nullable: true })
  @Property({ nullable: true })
  born?: Date;

  @Field()
  @Property()
  termsAccepted: boolean = false;

  constructor(body: UserValidator, em: EntityManager){
    super(body, em);
  }
}
