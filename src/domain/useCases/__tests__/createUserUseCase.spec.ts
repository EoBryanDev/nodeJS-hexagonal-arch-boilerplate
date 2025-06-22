import { describe, it, expect } from 'vitest';
import { CreateUserDTO } from '../../../application/dtos/create-use.dto';
import { InMemoryUserRepository } from '../../../infrastructure/database/repositories/InMemoryUserRepository';
import { CreateUserUserCase } from '../CreateUserUseCase';
import { CryptoUuidGenerator } from '../../../infrastructure/database/external/services/CryptoUuidGenerator';
import { BCryptHashedPwd } from '../../../infrastructure/database/external/services/BCryptHashedPwd';


describe('Create User Use Case', () => {
  it('should create a user with valid data', async () => {
    // Arrange
    const inMemoryUserRepository = new InMemoryUserRepository();
    const cryptoUuidGenerator = new CryptoUuidGenerator()
    const bCryptHashedPwd = new BCryptHashedPwd();

    const userData: CreateUserDTO = {
      name: 'Bryan',
      email: 'eobryandev',
      birthDate: '1998-01-29',
      password: '123'
    };

    // Act
    const createUserCase = new CreateUserUserCase(inMemoryUserRepository, cryptoUuidGenerator, bCryptHashedPwd);
    const user = await createUserCase.execute(userData)

    const isMatch = await bCryptHashedPwd.compare(userData.password, user.props.password);

    // Assert
    expect(user).toBeDefined();
    expect(user).toHaveProperty('props.id');
    expect(isMatch).toBe(true);
  })

  it('should not be able to create duplicated email user ', async () => {
    // Arrange
    const inMemoryUserRepository = new InMemoryUserRepository();
    const cryptoUuidGenerator = new CryptoUuidGenerator();
    const bCryptHashedPwd = new BCryptHashedPwd();

    const userData: CreateUserDTO = {
      name: 'Bryan',
      email: 'eobryandev',
      birthDate: '1998-01-29',
      password: '123'
    };

    // Act
    const createUserCase = new CreateUserUserCase(inMemoryUserRepository, cryptoUuidGenerator, bCryptHashedPwd);

    // First user creation should succeed
    await createUserCase.execute(userData)

    // Assert
    // Second user creation with the same email should throw an error
    await expect(createUserCase.execute(userData)).rejects.toThrow()
  })

  it('should not be able to create two different email users ', async () => {
    // Arrange
    const inMemoryUserRepository = new InMemoryUserRepository();
    const cryptoUuidGenerator = new CryptoUuidGenerator();
    const bCryptHashedPwd = new BCryptHashedPwd();

    const userData1: CreateUserDTO = {
      name: 'Bryan',
      email: 'eobryandev',
      birthDate: '1998-01-29',
      password: '123'
    };
    const userData2: CreateUserDTO = {
      name: 'Bryan',
      email: 'eobryandev2',
      birthDate: '1998-01-29',
      password: '123'
    };

    // Act
    const createUserCase = new CreateUserUserCase(inMemoryUserRepository, cryptoUuidGenerator, bCryptHashedPwd);



    await createUserCase.execute(userData1)
    await createUserCase.execute(userData2)


    // Assert
    expect((await inMemoryUserRepository.findAll()).length).toBe(2);
  })
})

