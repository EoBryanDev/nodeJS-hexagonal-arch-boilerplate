import { CreateUserUserCase } from "../../domain/useCases/CreateUserUseCase";
import { BCryptHashedPwd } from "../../infrastructure/database/external/services/BCryptHashedPwd";
import { CryptoUuidGenerator } from "../../infrastructure/database/external/services/CryptoUuidGenerator";
import { InMemoryUserRepository } from "../../infrastructure/database/repositories/InMemoryUserRepository";
import { FastifyAdapter } from "../../presentation/http/adapters/FastifyAdapter";
import { UserController } from "../../presentation/http/controllers/UserControllers";

export class AppFactory {
  static create() {
    // Infrastructure
    const userRepository = new InMemoryUserRepository();
    const idGenerator = new CryptoUuidGenerator();
    const httpAdapter = new FastifyAdapter();
    const bCryptHashedPwd = new BCryptHashedPwd();

    // Use Cases
    const createUserUseCase = new CreateUserUserCase(userRepository, idGenerator, bCryptHashedPwd);
    // const getUserUseCase = new GetUserUseCase(userRepository);
    // const deleteUserUseCase = new DeleteUserUseCase(userRepository);

    // Controllers
    const userController = new UserController(
      createUserUseCase,
      // getUserUseCase,
      // deleteUserUseCase,
      httpAdapter
    );

    return {
      userController,
      userRepository,
    };
  }
}
