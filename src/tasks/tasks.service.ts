import { Injectable } from '@nestjs/common';
import { TaskModel, TaskStatus } from './task.model';
import { CreateTaskDTO } from './dto/create-task.dto';
import { v1 as uuidv1 } from 'uuid';
@Injectable()
export class TasksService {
  private tasks: TaskModel[] = [];

  getAllTasks(): TaskModel[] {
    return this.tasks;
  }

  createTask(createTaskDTO: CreateTaskDTO): TaskModel {
    const {title, des } = createTaskDTO
    const task: TaskModel = {
      id: uuidv1(),
      title,
      des,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
