import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase',
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string) {
    if (!value) {
      return null;
    }

    const words = value.toLowerCase().split(' ');

    const newWords = words.map(word => {
      if (['of', 'the'].indexOf(word) > -1) {
        return word;
      }
      return word.substr(0, 1).toUpperCase() + word.substring(1);
    });

    return newWords.join(' ');

  }
}
