import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export default class Content {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    description: string;

    @Column({
        length:45,
    })
    linkContent: string;

    @CreateDateColumn({name: 'created_At'})
    createAt: Date;

    @UpdateDateColumn({name: 'update_At'})
    updateAt: Date;

}