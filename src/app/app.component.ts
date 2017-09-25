import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroListComponent } from './hero-list.component';
import { NewHeroComponent } from './new-hero.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Recipemoji';
  instructions = 'Add foods to make a recipe; save recipe.';

  heroes: Hero[];
  masterHeroList: Hero[];
  selectedHero: Hero = null;

  constructor(private heroService: HeroService){}
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.masterHeroList = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }


  showDetails(clickedHero: Hero) {
    this.selectedHero = clickedHero;
  }
  finishedEditing() {
    this.selectedHero = null;
  }
  addHero(newHeroFromChild: Hero) {
    this.masterHeroList.push(newHeroFromChild);
  }
}
