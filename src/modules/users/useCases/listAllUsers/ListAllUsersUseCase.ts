import { response } from "express";

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { } // vazio

  execute({ user_id }: IRequest): User[] {
    const idExist = this.usersRepository.findById(user_id);

    if (!idExist) {
      throw new Error("User not found");
    }

    if (!idExist.admin) {
      throw new Error("Don't have permission");
    }

    const allUsers = this.usersRepository.list();

    return allUsers;
  }
}

export { ListAllUsersUseCase };
