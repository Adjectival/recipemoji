import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from './hero';
@Pipe({
  name: 'type',
  pure: false
})
export class TypePipe implements PipeTransform {
  transform(input: Hero[], desiredType) {
    console.log(desiredType);
    var output: Hero[] = [];
    if (desiredType == "AreaAttack") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type == "AreaAttack") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType == "Attack") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type == "Attack") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType == "Balance") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type == "Balance") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType == "Defense") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type == "Defense") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType == "Support") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].type == "Support") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType == "all") {
      return input;
    }
  }
}
