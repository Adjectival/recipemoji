import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Hero } from './hero';
@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.sass']
})
export class EditHeroComponent {
  @Input() childSelectedHero: Hero;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }

}
