import { id } from "zod/v4/locales";
import { CreateUserDTO } from "../../../application/dtos/create-use.dto";
import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";

class InMemoryUserRepository implements IUserRepository {

  readonly users: User[] = [];

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.props.email === email) || null;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find(user => user.props.id === id) || null;
  }

  async update(user: User): Promise<void> {
    const index = this.users.findIndex(u => u.props.id === user.props.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  async create(user: User): Promise<User> {

    const createdUser = new User(user.props)
    this.users.push(createdUser);

    return createdUser;
  }

  async delete(id: string): Promise<void> {
    const index = this.users.findIndex(user => user.props.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }

  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

}

export { InMemoryUserRepository };
