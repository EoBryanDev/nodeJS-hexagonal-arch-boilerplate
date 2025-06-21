import { describe, it, expect } from 'vitest';
import { User } from '../User';

describe('User Entity', () => {
  it('should create a user with default values', () => {
    // Arrange
    const data = {
      id: '123',
      name: 'John Doe',
      email: 'johndoe@email.com',
      passwordHashed: '',
    }

    // Act
    const user = new User({ id: data.id, name: data.name, email: data.email, password: data.passwordHashed, birthDate: '1998-01-29' });

    // Assert
    expect(user).toBeInstanceOf(User);
    expect(user).toHaveProperty('props.createdAt');
    expect(user).toHaveProperty('props.isActive');
  })

  it('should create a user with custom values', () => {
    // Arrange
    const data = {
      id: '123',
      name: 'John Doe',
      email: 'johndoe@email.com',
      passwordHashed: '',
      createdAt: new Date('2023-01-01T00:00:00Z'),
      isActive: true,
    }

    // Act
    const user = new User({ id: data.id, name: data.name, email: data.email, password: data.passwordHashed, birthDate: '1998-01-29', createdAt: data.createdAt, isActive: data.isActive });

    // Assert
    expect(user).toBeInstanceOf(User);
  })
})
