import { User } from "@prisma/client";
import { IUserDTO } from "../dtos/IUserDTO";

export interface IUserRepository {
  findAll(): Promise<User[]>;
  create(user: IUserDTO): Promise<User>;
}
