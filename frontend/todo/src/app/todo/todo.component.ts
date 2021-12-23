import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../services/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id!: number;
  todo!: Todo;

  constructor(private todoDataService:TodoDataService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.todo = new Todo(this.id,'',false,new Date())
    this.id = this.route.snapshot.params['id'];
    if(this.id != -1){
      this.todoDataService.retrieveTodo('in28minutes',this.id).subscribe(
        data =>{
          this.todo = data
          // console.log(this.todo)
        }
      )
    }
  }

  saveTodo(){
    if(this.id == -1){
      this.todoDataService.saveTodo('in28minutes',this.todo).subscribe(
        data =>{
          console.log(data)
          this.router.navigate(['/todos'])
        }
      )
    }else{
      this.todoDataService.updateTodo('in28minutes',this.id,this.todo).subscribe(
        data =>{
          console.log(data)
          this.router.navigate(['/todos'])
        }
      )
    }
  }
}
