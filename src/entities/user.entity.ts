import { Entity, EntityManager, Enum, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import UserValidator from "../contracts/validators/user.validator";
import { Base } from "../utils/entities/base.entity";

@ObjectType()
@Entity()
export class User extends Base<User> {
  @Enum(() => UserRole)
  role!: UserRole;

  @Enum()
  status!: UserStatus;

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

export enum UserRole {
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  PROFESSOR = 'professor',
  STUDENT = 'student',
  USER = 'user'
}

export const enum UserStatus {
  DISABLED = 0,
  ACTIVE = 1,
}