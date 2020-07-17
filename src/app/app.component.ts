import { Component } from '@angular/core';


interface ITodo {
  done?: boolean;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pageTitle: string = 'My todo app with Angular';
  public todo: ITodo = {
    description: ''
  };
  public todos: ITodo[] = [];

  constructor() {
    this.todos = [
      {
        description: 'Learn how to create app with Angular',
        done: false
      },
      {
        description: 'Learn how to use Adonisjs',
        done: false
      }
    ];
  }

  handleAddNewTodo(): void {
    this.todos.push({ ...this.todo });

    this.todo.description = '';
  }
}
