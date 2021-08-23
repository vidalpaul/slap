import { Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Post()
  createTask() {}

  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }
}
