import { User } from "@prisma/client";
import { IUserRepository } from "../../repositories/IUsersRepository";

export class FindAllUsersUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.findAll();

    return users;
  }
}
