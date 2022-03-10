import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) { } // vazio

  execute({ user_id }: IRequest): User {
    const idExist = this.usersRepository.findById(user_id);

    if (!idExist) {
      throw new Error("Id not found");
    }

    return idExist;
  }
}

export { ShowUserProfileUseCase };
