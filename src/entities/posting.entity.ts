import { Collection, Entity, EntityManager, ManyToMany, ManyToOne, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import PostingValidator from "../contracts/validators/posting.validator";
import { Base } from "../utils/entities/base.entity";
import { Tag } from "./tag.entity";
import { User } from "./user.entity";

@ObjectType()
@Entity()
export class Posting extends Base<Posting> {
  @Field()
  @Property()
  title!: string;

  @Field()
  @Property()
  employer!: string;

  @Field()
  @Property()
  location!: string;

  @Field({ nullable: true })
  @Property({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  @Property({ nullable: true })
  requirements?: string;

  @Field(() => User)
  @ManyToOne(() => User)
  author: User;

  @Field({ nullable: true })
  @Property({ nullable: true })
  department?: string;

  @Field(() => [Tag])
  @ManyToMany(() => Tag)
  tags = new Collection<Tag>(this);

  // @Field({nullable: true})
  // @Property({nullable: true})
  // application = new Collection<Application>(this);

  constructor(body: PostingValidator, em: EntityManager) {
    super(body, em);
  }
}
