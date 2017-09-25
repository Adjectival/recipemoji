import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from './hero';
@Pipe({
  name: 'inParty',
  pure: false
})
export class InPartyPipe implements PipeTransform {
  transform(input: Hero[], partyStatus) {
    console.log(partyStatus);
    var output: Hero[] = [];
    if (partyStatus === "notParty") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].party === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (partyStatus === "inParty") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].party === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }}
