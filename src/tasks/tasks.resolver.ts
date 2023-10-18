import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { CreateTaskInput } from './create-task.input';
import { UpdateTaskInput } from './update-task.input'; // Você precisará criar esse DTO

@Resolver(() => Task)
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  // 1. Mostrar a lista de tarefas
  @Query(() => [Task])
  async getTasks(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  // 2. Permitir cadastro de nova tarefa
  @Mutation(() => Task)
  async createTask(@Args('input') input: CreateTaskInput): Promise<Task> {
    return this.tasksService.createTask(input);
  }

  // 3. Marcar a tarefa como concluída
  @Mutation(() => Task)
  async markTaskAsCompleted(@Args('id') id: number): Promise<Task> {
    return this.tasksService.markAsCompleted(id);
  }

  // 4. Editar tarefa
  @Mutation(() => Task)
  async updateTask(
    @Args('id') id: number,
    @Args('input') input: UpdateTaskInput,
  ): Promise<Task> {
    return this.tasksService.updateTask(id, input);
  }

  // 5. Deletar tarefa
  @Mutation(() => Boolean)
  async deleteTask(@Args('id') id: number): Promise<boolean> {
    return this.tasksService.deleteTask(id);
  }
}
