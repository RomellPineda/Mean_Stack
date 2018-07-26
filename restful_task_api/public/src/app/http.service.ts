import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    console.log('Run and Gun');
    // this.getTasks();
  }

  getTasks(){
    console.log('Service getTasks triggered');
    return this._http.get('/tasks');
 }

 postToServer(num){
  return this._http.post('/tasks', num);  
  }

  addTask(newTask: any){
    return this._http.post(`/new/${newTask.title}/${newTask.description}`, newTask);
  }

  deleteTask(task: any){
    return this._http.delete(`/delete/${task._id}`);
  }

  editTask(task: any){
    return this._http.put(`update/${task._id}/${task.title}/${task.description}`, task);
  }

}
