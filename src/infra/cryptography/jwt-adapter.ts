import { Encrypter, Decrypter } from "../../data/protocols/cryptography";

import jwt from 'jsonwebtoken';

export class JwtAdapter implements Encrypter, Decrypter {

  constructor(
    private readonly secretKey: string
  ){}

  async encrypt(plaintext: string): Promise<string> {
    return jwt.sign({id: plaintext}, this.secretKey)
  }

  async decrypt (cyphertext: string): Promise<string> {
    return jwt.verify(cyphertext, this.secretKey) as any
  }

}