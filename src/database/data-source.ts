import "reflect-metadata";
import { DataSource } from "typeorm";
import { CustomerModel } from "../models/CustomerModel";
import { CustomerSiteModel } from "../models/CustomerSiteModel";
import { SiteStatusModel } from "../models/SiteStatusModel";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3307,
  username: "root",
  password: "docker",
  database: "pg",
  synchronize: true,
  logging: false,
  entities: [CustomerModel, CustomerSiteModel, SiteStatusModel],
  migrations: [],
  subscribers: [],
});
