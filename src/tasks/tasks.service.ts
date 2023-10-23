import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskInput } from './create-task.input';
import { UpdateTaskInput } from './update-task.input';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  async createTask(input: CreateTaskInput): Promise<Task> {
    const task = this.taskRepository.create(input);
    return this.taskRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async updateTask(id: number, input: UpdateTaskInput): Promise<Task> {
    await this.taskRepository.update(id, input);
    return this.taskRepository.findOne({ where: { id: id } });
  }

  async markAsCompleted(id: number): Promise<Task> {
    await this.taskRepository.update(id, { completed: true });
    return this.taskRepository.findOne({ where: { id: id } });
  }

  async deleteTask(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
