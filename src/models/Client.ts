import { uuid } from 'uuidv4'
import Product from './Product';
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export default class Client{

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    buyLast: Date;

    @Column()
    purchases: Product[];

    constructor({ name, purchases}: Omit<Client, 'id, buyLast'>) {
        this.name = name;
        this.buyLast = new Date();
        this.id = uuid();
        this.purchases = purchases;
    }
}