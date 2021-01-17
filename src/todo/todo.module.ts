import { Module } from '@nestjs/common';
import { TodoServices } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
  providers: [TodoServices],
  controllers: [TodoController]
})
export class TodoModule {}
