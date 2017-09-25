import { Component, Input } from '@angular/core';

import { Hero } from './hero';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent {
  @Input() hero: Hero;
  public partyStatus: string = 'inParty';
  toggleParty(inParty: boolean) {
    this.hero.party = inParty;
    console.log('party change!');
  }
  toggleProperty(setProperty: string) {
    this.hero.property = setProperty;
  }
  onChange(changed) {
    this.partyStatus = changed;
    console.log(this.partyStatus);
  }
}
