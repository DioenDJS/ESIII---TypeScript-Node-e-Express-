import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @CreateDateColumn({name: 'created_At'})
    createAt: Date;

    @UpdateDateColumn({name: 'update_At'})
    updateAt: Date;

}