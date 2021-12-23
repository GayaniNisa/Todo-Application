import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_JPA_URL, API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveTodos(username:string){
    return this.http.get<Todo[]>(`${API_JPA_URL}/users/${username}/todos`)
  }

  retrieveTodo(username:string,id:number){
    return this.http.get<Todo>(`${API_JPA_URL}/users/${username}/todos/${id}`)
  }

  deleteTodo(username:string,id:number){
    return this.http.delete(`${API_JPA_URL}/users/${username}/todos/${id}`)
  }

  updateTodo(username:string,id:number,todo:Todo){
    return this.http.put(`${API_JPA_URL}/users/${username}/todos/${id}`,todo)
  }

  saveTodo(username:string,todo:Todo){
    return this.http.post(`${API_JPA_URL}/users/${username}/todos`,todo)
  }
}
