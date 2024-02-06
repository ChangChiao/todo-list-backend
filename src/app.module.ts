import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { ChatGateway } from './chat.gateway';

@Module({
  imports: [TodoModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
