import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from './hero';
@Pipe({
  name: 'property',
  pure: false
})
export class PropertyPipe implements PipeTransform {
  transform(input: Hero[], desiredProperty) {
    console.log(desiredProperty);
    var output: Hero[] = [];
    if (desiredProperty == "Rock") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].property == "Rock") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredProperty == "Scissors") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].property == "Scissors") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredProperty == "Paper") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].property == "Paper") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredProperty == "all") {
      return input;
    }
  }
}
