import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path: 'vektor', component: MainComponent},

  //new will be caught by :id if vektor/:id path is above vektor/new path
  {path: 'vektor/new', component: AddComponent},
  {path: 'vektor/:id/signup', component: ReviewComponent},

  {path: 'vektor/about', component: AboutComponent},
  {path: 'vektor/courses', component: CoursesComponent},
  {path: 'vektor/:id', component: CourseComponent},
  {path: 'vektor/:id/edit', component: EditComponent},
  {path: '', pathMatch: 'full', redirectTo: '/vektor'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
