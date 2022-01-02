import { IsDate, IsEmail, IsOptional, IsString, IsNumber, IsPositive } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
class UserValidator {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  age?: number;

  @Field({ nullable: true })
  @IsDate()
  @IsOptional()
  born?: Date;
}

export default UserValidator;