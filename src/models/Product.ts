import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Product{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true})
    code: number;

    @Column()
    description: string;

    @Column({type: "float"})
    buyPrice: number;

    @Column({type: "float"})
    sellPrice: number;

    @Column(type => Product)
    tags: Array<Product>;

    @Column()
    lovers: number;

}