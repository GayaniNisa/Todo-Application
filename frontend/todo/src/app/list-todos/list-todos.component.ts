import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../services/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  // todos = [
  //   new Todo(1,"Learn to dance",true,new Date()),
  //   new Todo(2,"Be an expert of Angular",false,new Date()),
  //   new Todo(3,"Visit USA",false,new Date())
  // ]

  todos: Todo[] = []
  message: string = ""

  constructor(private todoDataService:TodoDataService,private router:Router) { }

  ngOnInit(): void {
    this.refreshTodos()
  }

  refreshTodos(){
    this.todoDataService.retrieveTodos('in28minutes').subscribe(
      data =>{
        this.todos = data
      }
    )
  }

  deleteTodo(id:number){
    console.log(`delete ${id}`)
    this.todoDataService.deleteTodo('in28minutes',id).subscribe(
      Response=>{
        // console.log(Response)
        this.refreshTodos()
        this.message = "Delete of todo successfull.."
      },
      error=>{
        console.log(error.error.message)
      }
    )
  }

  updateTodo(id:number){
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }
}
