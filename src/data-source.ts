import "reflect-metadata"
import { DataSource } from "typeorm"
import { Customer } from "./entity/Customer"
import { CustomerSite } from "./entity/CustomerSite"
import { CustomerSiteStatus } from "./entity/CustomerSiteStatus"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "docker",
    database: "pg",
    synchronize: true,
    logging: false,
    entities: [Customer, CustomerSite, CustomerSiteStatus],
    migrations: [],
    subscribers: [],
})
