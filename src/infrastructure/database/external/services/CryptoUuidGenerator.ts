import { IIdGenerator } from "../../../../domain/services/IIdGenerator";
import crypto from 'crypto';

export class CryptoUuidGenerator implements IIdGenerator {
  generate(): string {
    return crypto.randomUUID();
  }
}
