import Product from './Product';
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
export default class Client{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    buyLast: Date;

    // @Column(type => Product)
    // purchases: Product[];

    @CreateDateColumn({name: 'created_At'})
    createAt: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updateAt: Date;

}