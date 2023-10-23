import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { CreateTaskInput } from './create-task.input';
import { UpdateTaskInput } from './update-task.input';

@Resolver(() => Task)
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  // Query para obter todas as tarefas
  @Query(() => [Task])
  async getTasks(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  // Mutação para criar uma nova tarefa
  @Mutation(() => Task)
  async createTask(@Args('input') input: CreateTaskInput): Promise<Task> {
    return this.tasksService.createTask(input);
  }

  // Mutação para atualizar uma tarefa
  @Mutation(() => Task)
  async updateTask(
    @Args('id') id: number,
    @Args('input') input: UpdateTaskInput,
  ): Promise<Task> {
    return this.tasksService.updateTask(id, input);
  }

  // Mutação para marcar uma tarefa como concluída
  @Mutation(() => Task)
  async markTaskAsCompleted(@Args('id') id: number): Promise<Task> {
    return this.tasksService.markAsCompleted(id);
  }

  // Mutação para deletar uma tarefa
  @Mutation(() => Boolean)
  async deleteTask(@Args('id') id: number): Promise<boolean> {
    await this.tasksService.deleteTask(id);
    return true; // Retorna true se a tarefa for deletada com sucesso
  }
}
