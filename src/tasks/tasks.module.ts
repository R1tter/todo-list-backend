import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { TasksResolver } from './tasks.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TasksService, TasksResolver],
})
export class TasksModule {}
