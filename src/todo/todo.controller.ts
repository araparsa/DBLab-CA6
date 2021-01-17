import { Controller, Get, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import CreateCategoryDto from './dto/create-categoty.dto';
import CreateTagDto from './dto/create-tag.dto';
import CreateTaskDto from './dto/create-task.dto';
import DeleteTaskDto from './dto/delete-task.dto';
import UpdateTaskDto from './dto/update-task.dto';
import { TodoServices } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoServices: TodoServices){}

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('categories/post')
    postCategory( @Body() category: CreateCategoryDto ){
        return this.todoServices.insertCategory(category);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post("tags/post")
    postTag( @Body() tag: CreateTagDto ){
        return this.todoServices.insertTag(tag);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post("tasks/post")
    postTask( @Body() task: CreateTaskDto ){
        return this.todoServices.insertTask(task);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get("tasks")
    getAllTasks(){
        return this.todoServices.getAllTasks();
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get("categories")
    getAllCategories(){
        return this.todoServices.getAllCategories();
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get("tags")
    getAllTags(){
        return this.todoServices.getAllTags();
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Put("tasks/update")
    updateTask( @Body() task: UpdateTaskDto ){
        return this.todoServices.updateTask(task);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Delete("tasks/delete")
    deleteTask( @Body() task: DeleteTaskDto ){
        return this.todoServices.deleteTask(task);
    }

}
