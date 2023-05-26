import { Table, Column, PrimaryKey} from "sequelize-typescript";

@Table
export class Base {
  @PrimaryKey
  @Column
  id?: string;

  @Column
  createdAt?: Date;

  @Column
  deletedAt?: Date;

  @Column
  updatedAt?: Date;
}