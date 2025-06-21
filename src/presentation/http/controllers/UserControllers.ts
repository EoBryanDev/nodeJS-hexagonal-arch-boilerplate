import { CreateUserUserCase } from "../../../domain/useCases/CreateUserUseCase"
import { HttpAdapter, HttpResponse } from "../services/HttpAdapters"

class UserController {
  constructor(
    // Initialize any dependencies or services here if needed
    private createUserUseCase: CreateUserUserCase,
    private httpAdapter: HttpAdapter
  ) { }

  async createUser(originalReq: any, originalRes: any): Promise<void> {
    try {
      const req = this.httpAdapter.adaptRequest(originalReq);

      // Validação com Zod na camada de apresentação
      // const validatedData = CreateUserSchema.parse(req.body);
      const validatedData = req.body;

      const user = await this.createUserUseCase.execute(validatedData);

      const response: HttpResponse = {
        statusCode: 201,
        body: {
          id: user.props.id,
          name: user.props.name,
          email: user.props.email,
          createdAt: user.props.createdAt,
        },
      };

      this.httpAdapter.adaptResponse(response, originalRes);
    } catch (error: any) {
      const response: HttpResponse = {
        statusCode: error.name === 'ZodError' ? 400 : 500,
        body: {
          error: error.name === 'ZodError'
            ? error.errors.map((e: any) => e.message).join(', ')
            : error.message
        },
      };

      this.httpAdapter.adaptResponse(response, originalRes);
    }
  }
}

export { UserController };
