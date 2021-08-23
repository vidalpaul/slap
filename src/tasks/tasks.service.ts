import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = ['do dishes', 'write a blog'];
  public getAllTasks() {
    return this.tasks;
  }
}
