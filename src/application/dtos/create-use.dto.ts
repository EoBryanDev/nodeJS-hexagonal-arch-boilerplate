export interface CreateUserDTO {
  name: string;
  email: string;
  birthDate: string;
  password: string;
  createdAt?: Date | null;
  isActive?: boolean | null;
}
