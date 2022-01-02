import { Collection, Entity, EntityManager, ManyToMany, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import TagValidator from "../contracts/validators/tag.validator";
import { Base } from "../utils/entities/base.entity";
import { Posting } from "./posting.entity";

@ObjectType()
@Entity()
export class Tag extends Base<Tag> {
  @Field()
  @Property()
  public name: string;

  @Field(() => [Posting])
  @ManyToMany(() => Posting, (p: Posting) => p.tags)
  public postings = new Collection<Posting>(this);

  constructor(body: TagValidator, em: EntityManager) {
    super(body, em);
  }
}
