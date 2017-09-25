import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from './hero';
@Pipe({
  name: 'terr1',
  pure: false
})
export class Terr1Pipe implements PipeTransform {
  transform(input: Hero[], desiredTerr1) {
    console.log(desiredTerr1);
    var output: Hero[] = [];
    if (desiredTerr1 == "Grass") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].terr1 == "Grass") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTerr1 == "Thornbush") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].terr1 == "Thornbush") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTerr1 == "Water") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].terr1 == "Water") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTerr1 == "Swamp") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].terr1 == "Swamp") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTerr1 == "Poison") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].terr1 == "Poison") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTerr1 == "Lava") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].terr1 == "Lava") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTerr1 == "Glacier") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].terr1 == "Glacier") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredTerr1 == "all") {
      return input;
    }
  }}
