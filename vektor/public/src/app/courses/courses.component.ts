import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getEm();
  }

  getEm() {
    this._httpService.getCourses().subscribe(data => {
      console.log('Retrieving courses', data)
      this.courses = data;
    })
  }

  // Reference:
  // delSpot(spot: any) {
  //   console.log('Delete Function fired', spot);
  //   this._httpService.leteSpot(spot).subscribe(data => {
  //     this.getAll();
  //   })
  // }

}
