import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

interface Base {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

@Entity()
export abstract class BaseEntity implements Base{
  @PrimaryColumn()
  public id!: string;

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  public updatedAt!: Date;

  @DeleteDateColumn()
  public deletedAt!: Date;
}

