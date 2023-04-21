import { Entity, Column } from "typeorm"
import { BaseEntity } from "@/domain/models/base";

export interface User {
  name: string;
  email: string;
  identifierCode: string;
  phone: string;
}

@Entity()
export class UserEntity extends BaseEntity implements User{
  @Column()
  public name!: string;

  @Column()
  public email!: string;

  @Column()
  public password?: string;

  @Column()
  public identifierCode!: string;

  @Column()
  public phone!: string;
}