import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskInput } from './create-task.input';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  async createTask(input: CreateTaskInput): Promise<Task> {
    const task = this.taskRepository.create(input);
    return this.taskRepository.save(task);
  }

  // Adicione mais métodos conforme necessário, como getTasks, updateTask, deleteTask, etc.
}
