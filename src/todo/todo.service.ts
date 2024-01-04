import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  private todos = [
    { id: '1', title: 'Learn NestJS' },
    { id: '2', title: 'Build Todo App' },
  ];

  getAllTodos() {
    return this.todos;
  }

  getTodoById(id: string) {
    return this.todos.find((todo) => todo.id === id);
  }

  createTodo(newTodo: { title: string }) {
    const todo = { id: (this.todos.length + 1).toString(), ...newTodo };
    this.todos.push(todo);
    return todo;
  }

  updateTodo(id: string, updatedTodo: { title: string }) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos[index] = { ...this.todos[index], ...updatedTodo };
      return this.todos[index];
    }
    return null;
  }

  deleteTodo(id: string) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      const deletedTodo = this.todos[index];
      this.todos.splice(index, 1);
      return deletedTodo;
    }
    return null;
  }
}
