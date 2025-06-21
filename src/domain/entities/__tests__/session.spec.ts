import { describe, it, expect } from 'vitest';
import { Session } from '../session';

describe('Session Entity', () => {
  it('should create a session with default values', () => {
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 5); // Set expiration to 1 hour from now
    // Arrange
    const data = {
      userId: '123',
      token: '',
      refreshToken: '',
      expiresAt,
    }

    // Act
    const session = Session.create(data.userId, data.token, data.refreshToken, data.expiresAt)

    // Assert

    expect(session).toBeInstanceOf(Session);
    expect(session.isExpired()).toBe(false);
    expect(session).toHaveProperty('props.id');
    expect(session).toHaveProperty('props.createdAt');
  })

  it('should create a session with custom values', () => {
    const createdAt = new Date();
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 5);
    // Arrange
    const data = {
      id: '123',
      userId: '123',
      token: '',
      refreshToken: '',
      expiresAt,
      createdAt,
    }
    // Act
    const session = new Session(data);
    // Assert
    expect(session).toBeInstanceOf(Session);
    expect(session.isExpired()).toBe(false);
  })

  it('should be an expired session', () => {
    const createdAt = new Date();
    createdAt.setMinutes(createdAt.getMinutes() + 6)

    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 5);
    // Arrange
    const data = {
      id: '123',
      userId: '123',
      token: '',
      refreshToken: '',
      expiresAt,
      createdAt,
    }
    // Act
    const session = new Session(data);

    const isExpired = session.isExpired();
    // Assert
    expect(isExpired).toBe(true);
  })
})
