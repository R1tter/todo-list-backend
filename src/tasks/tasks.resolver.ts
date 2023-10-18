import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { CreateTaskInput } from './create-task.input';

@Resolver(() => Task)
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  @Mutation(() => Task)
  async createTask(@Args('input') input: CreateTaskInput): Promise<Task> {
    return this.tasksService.createTask(input);
  }

  // Adicione mais resolvers conforme necessário, como queries para obter tarefas, mutações para atualizar ou deletar tarefas, etc.
}
