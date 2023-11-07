import { Column, Entity, PrimaryColumn } from "typeorm";
import {v1 as uuidv1} from "uuid";

@Entity()
export class CustomerSiteStatus {
    @PrimaryColumn()
    id: string = uuidv1();

    @Column()
    description: string;

    @Column()
    isActive: boolean;
}