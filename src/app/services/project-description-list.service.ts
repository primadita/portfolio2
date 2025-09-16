import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDescriptionListService {

  constructor() { }

  projDescriptionList = [
    {
      projname: 'Join',
      imgPath: './assets/design/03_portfolio/29_Join thumbnail.png',
      altText: 'Join thumbnail', 
      desc: 'portfolio.join.desc',
      details: 'Lorem ipsum',
      ihk: true,
      duration: '4 weeks'
    },
    {
      projname: 'El Pollo Loco',
      imgPath: './assets/design/03_portfolio/startscreen_1.png',
      altText: 'El pollo loco thumbnail',
      desc: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      details: 'Lorem ipsum',
      ihk: false,
      duration: '4 weeks'
    },
    {
      projname: 'Pokedéx',
      imgPath: './assets/design/03_portfolio/pokedex.png',
      altText: 'Pokedex thumbnail',
      
      desc: 'Pokemon list build using data from Pokemon API',
      details: 'Lorem ipsum',
      ihk: false,
      duration: '1 weeks'
    }
  ]
}
