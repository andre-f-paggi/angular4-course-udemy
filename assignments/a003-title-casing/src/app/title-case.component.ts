import { Component } from '@angular/core';

@Component({
  selector: 'app-title-case',
  template: `
    <input [(ngModel)]="typedText" type="text" />
    <p>{{ typedText | titlecase }}</p>
  `
})
export class TitleCaseComponent {
  typedText: string;
}
