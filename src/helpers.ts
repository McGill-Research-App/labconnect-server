import { EntityManager } from "@mikro-orm/core";
import faker from "faker";
import { Posting } from "./entities/posting.entity";
import { Tag } from "./entities/tag.entity";
import { User } from "./entities/user.entity";

export async function seedDatabase(em: EntityManager) {
  const defaultUser = em.create(User, {
    email: "douglas@mail.com",
    name: "Douglas So",
    age: 23,
  });
  em.persist(defaultUser);

  const posting1 = em.create(Posting, {
    title: "Posting 1",
    employer: "Employer 1",
    location: "Germany",
    description: "Desc 1",
    author: defaultUser,
  });
  em.persist(posting1);

  for (let i = 0; i < 10; i++) {
    const user = new User(
      {
        email: faker.internet.email(),
        name: faker.name.findName(),
        age: faker.datatype.number({ min: 16, max: 60 }),
      },
      em
    );
    em.persist(user);

    const posting = em.create(Posting, {
      title: faker.company.bs(),
      employer: faker.company.companyName(),
      location: faker.address.country(),
      description: faker.lorem.sentence(),
      author: user,
      tags: [
        new Tag({ name: faker.lorem.words(2) }, em),
        new Tag({ name: faker.lorem.words(2) }, em),
      ],
    });
    em.persist(posting);
  }

  // https://github.com/MichalLytek/type-graphql/blob/aeb68a5e684a069f08647ecb2d5ac2c77c7d0a55/examples/using-container/recipe-service.ts#L22
  // recipe1.ratings.add(
  //   em.create(Rate, { value: 2, user: defaultUser }),
  //   em.create(Rate, { value: 4, user: defaultUser }),
  //   em.create(Rate, { value: 5, user: defaultUser }),
  //   em.create(Rate, { value: 3, user: defaultUser }),
  //   em.create(Rate, { value: 4, user: defaultUser }),
  // );

  await em.flush();
  return { defaultUser };
}
