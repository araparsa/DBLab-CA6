import { Injectable } from '@nestjs/common';
import CategoryEntity from 'db/entity/category.entity';
import TagEntity from 'db/entity/tag.entity';
import TaskEntity from 'db/entity/task.entity';
import CreateCategoryDto from './dto/create-categoty.dto';
import CreateTagDto from './dto/create-tag.dto';
import CreateTaskDto from './dto/create-task.dto';
import DeleteTaskDto from './dto/delete-task.dto';
import UpdateTaskDto from './dto/update-task.dto';

@Injectable()
export class TodoServices {
    
    async insertCategory(categoryDetails: CreateCategoryDto): Promise<CategoryEntity>{
        const { type } = categoryDetails;
        const category = new CategoryEntity();
        category.type = type;
        await category.save();
        return category;
    }

    async insertTag(tagDetails: CreateTagDto): Promise<TagEntity>{
        const { tag } = tagDetails;
        const tagEntity = new TagEntity();
        tagEntity.tag = tag;
        await tagEntity.save();
        return tagEntity;
    }

    async insertTask(taskDetails: CreateTaskDto): Promise<TaskEntity>{
        const { description, categoryID, tagIDs, subtaskIDs } = taskDetails;
        const task = new TaskEntity();
        const category = await CategoryEntity.findOne(categoryID);
        task.category = category;
        task.description = description;
        task.tags = [];
        for (let i = 0; i < tagIDs.length; i++){
            const tag = await TagEntity.findOne(tagIDs[i]);
            task.tags.push(tag);
        }
        if (subtaskIDs){
            task.subTasks = [];
            for (let i = 0; i < subtaskIDs.length; i++){
                const subtask = await TaskEntity.findOne(subtaskIDs[i]);
                task.subTasks.push(subtask);
            }
        }
        await task.save();
        return task;
    }

    async getAllTasks(): Promise<TaskEntity[]>{
        return await TaskEntity.find();
    }

    async getAllCategories(): Promise<CategoryEntity[]>{
        return await CategoryEntity.find();
    }

    async getAllTags(): Promise<TagEntity[]>{
        return await TagEntity.find();
    }

    async updateTask( taskDetails: UpdateTaskDto ): Promise<TaskEntity>{
        const { taskID, description, categoryID, subtaskIDs, tagIDs } = taskDetails;
        const task: TaskEntity = await TaskEntity.findOne({ where: { id: taskID } });
        if (description){
            task.description = description;
        }
        if (categoryID){
            const category = await CategoryEntity.findOne({ where: { id: categoryID } });
            task.category = category;
        }
        if (subtaskIDs){
            task.subTasks = [];
            for (let i = 0; i < subtaskIDs.length; i++){
                const subtask = await TaskEntity.findOne(subtaskIDs[i]);
                task.subTasks.push(subtask);
            }
        }
        if(tagIDs){
            for (let i = 0; i < tagIDs.length; i++){
                const tag = await TagEntity.findOne(tagIDs[i]);
                task.tags.push(tag);
            }
        }
        TaskEntity.save(task);
        return task;
    }

    async deleteTask( {id}: DeleteTaskDto ): Promise<TaskEntity>{
        const task = await TaskEntity.findOne(id);
        return await TaskEntity.remove(task);
    }
}   
