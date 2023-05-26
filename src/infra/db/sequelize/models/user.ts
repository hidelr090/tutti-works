import { Table, Column } from "sequelize-typescript";
import { Base } from "./base";

@Table
export class User extends Base{
  @Column
  name?: string;

  @Column
  email?: string;

  @Column
  password?: string;

  @Column
  identifierCode?: string;

  @Column
  phone?: string;

  @Column
  avatarUrl?: string;
}