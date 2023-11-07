import {
  Entity,
  PrimaryColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import {v1 as uuidv1} from "uuid";
import { CustomerSiteStatus } from "./CustomerSiteStatus";
import { Customer } from "./Customer";

@Entity()
export class CustomerSite {
  @PrimaryColumn()
  id: string = uuidv1();

  @Column("text")
  panelSiteUrl: string;

  @Column("date")
  domainRegistrationDate: Date;

  @Column("date")
  domainExpirationDate: Date;

  @Column("text")
  hostname: string;

  @Column("date")
  hostnameRegistrationDate: Date;

  @Column("date")
  hostnameExpirationDate: Date;

  @OneToOne(() => CustomerSiteStatus)
  @JoinColumn()
  CustomerSiteStatus: CustomerSiteStatus;

  @ManyToOne(() => Customer, (customer) => customer.customerSite)
  customer: Customer;
}