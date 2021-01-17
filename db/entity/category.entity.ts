import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import TaskEntity from "./task.entity";

@Entity()
export default class CategoryEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @OneToMany(type => TaskEntity, task => task.category)
    tasks: TaskEntity[];
}