import { Request, Response } from "express";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { FindAllUsersUseCase } from "./FindAllUsersUseCase";

export class FindAllUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const usersRepository = new UsersRepository();
    const findAllUsersUseCase = new FindAllUsersUseCase(usersRepository);

    const users = await findAllUsersUseCase.execute();

    return res.json(users);
  }
}
