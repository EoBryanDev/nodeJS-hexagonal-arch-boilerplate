import { CreateUserDTO } from "../../application/dtos/create-use.dto";
import { User } from "../entities/User";
import { IUserRepository } from "../repositories/IUserRepository";
import { IIdGenerator } from "../services/IIdGenerator";

class CreateUserUserCase {
  constructor(private userRepository: IUserRepository, private idGenerator: IIdGenerator) { }

  async execute(userData: CreateUserDTO): Promise<User> {

    // Check if user with the same email already exists
    const existingUser = await this.userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error("User with this email already exists.");
    }
    const id = this.idGenerator.generate();
    const data = {
      id,
      ...userData,
    }
    // Create user
    const user = await this.userRepository.create({ props: data });

    return user;
  }
}

export { CreateUserUserCase };
