import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <h2>My favorite hero is: {{myHero.name}}</h2>
  <p>Heroes:</p>
  <ul>
  <li *ngFor="let hero of heroes">
  {{ hero.name }}
  </li>
  </ul>
  <p *ngIf="heroes.length > 3">There are many Heroes! </p>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'anand'),
    new Hero(2, 'Kumar'),
    new Hero(3, 'Anita'),
    new Hero(4, 'Rawat')
  ];

  myHero = this.heroes[0];
}
