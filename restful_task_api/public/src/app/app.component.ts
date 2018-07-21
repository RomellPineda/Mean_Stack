import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mean';
  num: number;
  randNum: number;
  str: string;
  first_name: string;
  snacks: string[];
  loggedIn: boolean;
  tasks = [];
  missions: any;
  newTask: any;

  // onButtonClickParam(num: Number): void { 
  //   console.log(`Click event is working with num param: ${num}`);
  //   // call the service's method to post the data, but make sure the data is bundled up in an object!
  //   let observable = this._httpService.postToServer({data: num});
  //   observable.subscribe(data => console.log("Got our data!", data));
  // }

  onSubmit() {
    console.log('onSubmit triggered', this.newTask);
    // Code to send off the form data (this.newTask) to the Service
    let obser = this._httpService.addTask(this.newTask);
    obser.subscribe(data=>{
      console.log('Component onSubmit triggered', data);
      // Reset this.newTask to a new, clean object.
      this.newTask = { title: "", description: "" };
      this.onButtonClick();
    })
  }

  onButtonClick(): void { 
    console.log(`Click event triggered`);
    // call the service's method to post the data, but make sure the data is bundled up in an object!
    let observable = this._httpService.getTasks();
    // observable.subscribe(data => console.log("Acquired Tasks!", data));
    observable.subscribe(data =>{console.log('Acquired Tasks', data)
    this.missions = data;
    })
  }

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.num = 911;
    this.randNum = Math.floor( (Math.random()  * 2 ) + 1);
    this.str = 'Hello Angular Developer!';
    this.first_name = 'Alpha';
    this.snacks = ["vanilla latte with skim milk", "brushed suede", "cookie"];
    this.loggedIn = true;
    this.getTasksFromService()
    this.newTask = { title: "", description: "" }
  }
  getTasksFromService(){
    let taskObservable = this._httpService.getTasks();
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    taskObservable.subscribe(data => {console.log("Got the data on initial start up!", data)
    this.tasks = data['tasks'];
    })
  }
}
