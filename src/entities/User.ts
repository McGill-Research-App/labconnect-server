import { Entity, PrimaryKey, Property, SerializedPrimaryKey } from "@mikro-orm/core";

@Entity()
export class User {

    @PrimaryKey()
    _id!: number;
  
    @SerializedPrimaryKey()
    id!: string;
  
    @Property()
    createdAt: Date = new Date();
  
    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();
  
    @Property()
    name!: string;
  
    @Property()
    email!: string;
  
    @Property({ nullable: true })
    age?: number;
  
    @Property()
    termsAccepted: boolean = false;
  
    @Property({ nullable: true })
    born?: Date;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

}