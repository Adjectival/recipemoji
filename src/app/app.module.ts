import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list.component';
import { HeroComponent } from './hero.component';
import { HeroService } from './hero.service';
import { EditHeroComponent } from './edit-hero.component';
import { NewHeroComponent } from './new-hero.component';
import { PropertyPipe } from './property.pipe';
import { TypePipe } from './type.pipe';
import { InPartyPipe } from './in-party.pipe';
import { Terr1Pipe } from './terr1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroComponent,
    EditHeroComponent,
    NewHeroComponent,
    PropertyPipe,
    TypePipe,
    InPartyPipe,
    Terr1Pipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
