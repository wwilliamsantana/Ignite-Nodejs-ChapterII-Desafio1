import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      admin: false,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const idExist = this.users.find((idExist) => idExist.id === id);

    return idExist;
  }

  findByEmail(email: string): User | undefined {
    const emailExist = this.users.find(
      (emailExist) => emailExist.email === email
    );

    return emailExist;
  }

  turnAdmin(receivedUser: User): User {
    Object.assign(receivedUser, {
      admin: true,
      updated_at: new Date(),
    });
    return receivedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
