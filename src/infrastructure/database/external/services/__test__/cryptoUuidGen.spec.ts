import { describe, expect, it } from "vitest";

import { CryptoUuidGenerator } from "../CryptoUuidGenerator";

describe('CryptoUuidGenerator', () => {
  it('should generate a valid UUID', () => {
    const cryptoUuidGen = new CryptoUuidGenerator();
    const uuid = cryptoUuidGen.generate();

    // Check if the generated UUID is a valid UUID format
    expect(uuid).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    );
  });
});
