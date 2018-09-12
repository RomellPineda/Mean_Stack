import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Additional imports:
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { ChatService } from './chat.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ReviewComponent } from './review/review.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    CoursesComponent,
    CourseComponent,
    EditComponent,
    AddComponent,
    ReviewComponent,
    SupportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    HttpService,
    ChatService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
