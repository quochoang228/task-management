import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskModel } from './task.model';
import { CreateTaskDTO } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): TaskModel[] {
    return this.tasksService.getAllTasks();
  }
  @Post()
  createTask(@Body() createTaskDTO: CreateTaskDTO): TaskModel {
    return this.tasksService.createTask(createTaskDTO)
  }
}
