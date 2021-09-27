import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, TreeChildren, UpdateDateColumn } from "typeorm";

@Entity('product')
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

    @TreeChildren()
    tags: Array<Product>;

    @Column()
    lovers: number;

    @CreateDateColumn({name: 'created_At'})
    createAt: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updateAt: Date;

}