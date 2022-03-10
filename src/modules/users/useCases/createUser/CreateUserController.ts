import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { } // vazio

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    try {
      const createUser = this.createUserUseCase.execute({ name, email });
      return response.status(201).json(createUser);
    } catch {
      return response.status(400).json({ error: "Email already exists!" });
    }
  }
}

export { CreateUserController };
