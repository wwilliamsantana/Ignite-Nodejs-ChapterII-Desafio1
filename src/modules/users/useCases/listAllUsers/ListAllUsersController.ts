import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { } // vazio

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {
      const userList = this.listAllUsersUseCase.execute({
        user_id: user_id.toString(),
      });
      return response.status(201).json(userList);
    } catch {
      return response.status(400).json({ error: "Don't have permission" });
    }
  }
}

export { ListAllUsersController };
