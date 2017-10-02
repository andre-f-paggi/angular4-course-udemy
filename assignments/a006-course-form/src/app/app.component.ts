import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: { key: any, value: any }[];

  constructor() {
    console.log(CourseCategory);
    this.categories = this.getCategories();
    console.log(this.categories);
  }

  getCategories(): { key: any, value: any }[] {
    return (Object.values(CourseCategory) as Array<string>)
      .map((value) => {
        return {
          key: value,
          value: CourseCategory[value]
        };
      })
      .filter(enumObj => typeof enumObj.key === 'string');
  }

}

enum CourseCategory {
  Development = 1,
  Art = 2,
  Languages = 3,
}
