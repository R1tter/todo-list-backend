import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { CreateTaskInput } from './create-task.input';
import { UpdateTaskInput } from './update-task.input';

@Resolver(() => Task)
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  // Query find all tasks
  @Query(() => [Task])
  async getTasks(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  // Mutation to create a task
  @Mutation(() => Task)
  async createTask(@Args('input') input: CreateTaskInput): Promise<Task> {
    return this.tasksService.createTask(input);
  }

  // Mutation to update a task
  @Mutation(() => Task)
  async updateTask(
    @Args('id') id: number,
    @Args('input') input: UpdateTaskInput,
  ): Promise<Task> {
    return this.tasksService.updateTask(id, input);
  }

  // Mutation to mark as completed
  @Mutation(() => Task)
  async markTaskAsCompleted(@Args('id') id: number): Promise<Task> {
    return this.tasksService.markAsCompleted(id);
  }

  // Mutation to delete a task
  @Mutation(() => Boolean)
  async deleteTask(@Args('id') id: number): Promise<boolean> {
    await this.tasksService.deleteTask(id);
    return true; // Returns true if was deleted successfully
  }
}
