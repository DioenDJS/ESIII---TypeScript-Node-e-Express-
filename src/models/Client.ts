import Product from './Product';
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export default class Client{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    buyLast: Date;

    @Column(type => Product)
    purchases: Product[];

}