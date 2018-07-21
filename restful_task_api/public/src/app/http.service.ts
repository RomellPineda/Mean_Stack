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
    // our http response is an Observable, store it in a variable
    // let tempObservable = this._http.get('https://pokeapi.co/api/v2/pokemon/13/');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    console.log('Service getTasks triggered');
    return this._http.get('/tasks');
    // let obs = this._http.get('/tasks');
    // obs.subscribe(data=>{console.log(data)});
    // return obs;
 }

 postToServer(num){
  // use the .post() method of HttpClient
  // num must be an object
  // provide the url of your post route - make sure this is set up in your server!
  return this._http.post('/tasks', num);  
  }

  addTask(newTask: any){
    return this._http.post(`/new/${newTask.title}/${newTask.description}`, newTask);
  }
}
