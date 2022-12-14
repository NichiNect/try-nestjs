import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MyNote {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    title: string;

    @Column('text')
    description: string;

    @Column()
    isPublished: boolean;
}