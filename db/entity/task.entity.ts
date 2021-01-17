import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import CategoryEntity from "./category.entity";
import TagEntity from "./tag.entity";

@Entity()
export default class TaskEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string 

    @ManyToOne(type => CategoryEntity, category => category.tasks)
    category: CategoryEntity;

    @ManyToMany(type => TagEntity)
    @JoinTable()
    tags: TagEntity[];

    @ManyToMany(type => TaskEntity)
    @JoinTable()
    subTasks: TaskEntity[];
}