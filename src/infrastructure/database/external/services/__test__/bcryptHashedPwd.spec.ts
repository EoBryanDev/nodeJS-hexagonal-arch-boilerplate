import { describe, expect, it } from "vitest";
import { BCryptHashedPwd } from "../BCryptHashedPwd";

describe('BCryptHashedPwd', () => {
  it('should hash and compare passwords correctly', async () => {
    const bCryptHashedPwd = new BCryptHashedPwd();
    const password = '123456';

    const hashed = await bCryptHashedPwd.hash(password);
    expect(hashed).not.toBe(password);

    const isMatch = await bCryptHashedPwd.compare(password, hashed);
    expect(isMatch).toBe(true);
  });
});
