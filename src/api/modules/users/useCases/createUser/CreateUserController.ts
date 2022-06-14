import { Request, Response } from "express";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, username, email, password } = req.body;

    const usersRepository = new UsersRepository();
    const createUserUseCase = new CreateUserUseCase(usersRepository);

    const newUser = await createUserUseCase.execute({
      name,
      username,
      email,
      password,
    });

    return res.status(201).send(newUser);
  }
}
