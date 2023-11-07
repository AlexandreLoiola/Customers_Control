import {
  Entity,
  PrimaryColumn,
  Column,
  OneToMany,
} from "typeorm";
import {v1 as uuidv1} from "uuid";
import { CustomerSite } from "./CustomerSite";

@Entity()
export class Customer {
  @PrimaryColumn()
  id: string = uuidv1();

  @Column("text")
  name: string;

  @Column("text")
  email: string;

  @OneToMany(() => CustomerSite, (customerSite) => customerSite.customer)
  customerSite: CustomerSite[];
}
