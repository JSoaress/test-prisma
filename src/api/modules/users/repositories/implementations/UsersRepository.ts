import { User } from "@prisma/client";
import { IUserDTO } from "../../dtos/IUserDTO";
import { IUserRepository } from "../IUsersRepository";
import { prisma } from "../../../../database/prismaClient";

export class UsersRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        created_at: true,
        updated_at: true,
        name: true,
        username: true,
        email: true,
      },
    });

    return users;
  }

  async create(user: IUserDTO): Promise<User> {
    const newUser = await prisma.user.create({
      data: user,
      select: {
        id: true,
        created_at: true,
        updated_at: true,
        name: true,
        username: true,
        email: true,
      },
    });

    return newUser;
  }
}
