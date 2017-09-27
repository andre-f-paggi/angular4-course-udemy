import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <h2>{{ "Title: " + title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
       {{ course }}
      </li>
    </ul>
  `
  // "*" prefix means that the following directive that changes the structure of the DOM
})
export class CoursesComponent {
  title = 'List of courses';
  courses = ['Course 1', 'Course 2', 'Course 3'];
}
