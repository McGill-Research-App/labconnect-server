import { Migration } from '@mikro-orm/migrations';

export class Migration20210508221317 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("_id" serial primary key, "id" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "email" varchar(255) not null, "age" int4 null, "terms_accepted" bool not null, "born" timestamptz(0) null);');

    this.addSql('create table "post" ("id" serial primary key, "title" text not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
  }

}
