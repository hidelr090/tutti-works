import { Hasher, HashComparer, Encrypter, Decrypter } from "@/data/protocols";

import Chance from "chance";

const chance = new Chance();

export class HasherSpy implements Hasher {
  plaintext = '';
  digest = chance.hash();
  
  async hash(plaintext: string): Promise<string> {
    this.plaintext = plaintext;
    return this.digest;
  }
}

export class HashComparerSpy implements HashComparer {
  plaintext: string | undefined;
  digest: string | undefined;
  isValid = true;

  async compare (plaintext: string, digest: string): Promise<boolean>{
    this.plaintext = plaintext;
    this.digest = digest;
    return this.isValid;
  }

}

export class EncrypterSpy implements Encrypter {
  cyphertext = chance.guid();
  plaintext: string | undefined;

  async encrypt (plaintext: string): Promise<string>{
    this.plaintext = plaintext;
    return this.cyphertext
  }

}

export class DecrypterSpy implements Decrypter {
  plaintext = chance.string({
    length: 8,
    pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  });
  cyphertext: string | undefined;

  async decrypt (cyphertext: string): Promise<string> {
    this.cyphertext = cyphertext;
    return this.plaintext;
  }
}