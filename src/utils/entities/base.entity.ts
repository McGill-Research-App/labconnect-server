import {
  BaseEntity,
  EntityManager,
  PrimaryKey,
  Property
} from "@mikro-orm/core";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType({ isAbstract: true })
export class Base<T extends { id: number }> extends BaseEntity<T, "id"> {
  @Field(() => ID)
  @PrimaryKey()   // @PrimaryKey({ type: "uuid" }), uses string
  public id: number;

  @Field()
  @Property()
  public createdAt: Date = new Date();

  @Field()
  @Property({ onUpdate: () => new Date() })
  public updatedAt: Date = new Date();

  constructor(body = {}, em: EntityManager) {
    super();
    this.assign(body, { em: em });
  }
}
