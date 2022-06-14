import { User } from "@prisma/client";
import { IUserRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  username: string;
  email: string;
  password: string;
}

export class CreateUserUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute({ name, username, email, password }: IRequest): Promise<User> {
    const newUser = await this.usersRepository.create({
      name,
      username,
      email,
      password,
    });

    return newUser;
  }
}
