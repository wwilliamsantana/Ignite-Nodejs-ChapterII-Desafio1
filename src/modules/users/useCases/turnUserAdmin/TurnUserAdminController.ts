import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { } // vazio

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const adminUpdate = this.turnUserAdminUseCase.execute({ user_id });
      return response.status(201).json(adminUpdate);
    } catch {
      return response.status(404).json({ error: "Not authorized! " });
    }
  }
}

export { TurnUserAdminController };
