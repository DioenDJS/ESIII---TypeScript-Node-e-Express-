import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export default class Class {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length:100,
        unique: true,
    })
    name: string;

    @Column()
    duration: number;

    @CreateDateColumn({name: 'created_At'})
    createAt: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updateAt: Date;

}
