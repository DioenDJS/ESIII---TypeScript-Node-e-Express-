import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export default class Lesson {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    description: string;

    @CreateDateColumn({name: 'created_At'})
    createAt: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updateAt: Date;

}