import { IsString } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
class PostingValidator {
  @Field()
  @IsString()
  title: string;
}

export default PostingValidator;
