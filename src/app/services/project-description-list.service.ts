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
      details: 'portfolio.join.details',
      ihk: true,
      duration: 'portfolio.join.duration',
      html: true,
      css: true,
      js: true,
      angular: true,
      ts: true,
      firebase: true,
      link_next: '#join',
      link_back: '#projects',
      link_github: '',
      link_livetest: ''
    },
    {
      projname: 'El Pollo Loco',
      imgPath: './assets/design/03_portfolio/startscreen_1.png',
      altText: 'El pollo loco thumbnail',
      desc: 'portfolio.elpolloloco.desc',
      details: 'portfolio.elpolloloco.details',
      ihk: false,
      duration: 'portfolio.elpolloloco.duration',
      html: true,
      css: true,
      js: true,
      angular: false,
      ts: false,
      firebase: false,
      link_next: '#el-pollo-loco',
      link_back: '#projects',
      link_github: 'https://github.com/primadita/el-pollo-loco.git',
      link_livetest: 'https://felicia-primadita-tretter.developerakademie.net/el-pollo-loco/index.html'
    },
    {
      projname: 'Pokedéx',
      imgPath: './assets/design/03_portfolio/pokedex.png',
      altText: 'Pokedex thumbnail',
      desc: 'portfolio.pokedex.desc',
      details: 'portfolio.pokedex.details',
      ihk: false,
      duration: 'portfolio.pokedex.duration',
      html: true,
      css: true,
      js: true,
      angular: true,
      ts: false,
      firebase: false,
      link_next: '#pokedex',
      link_back: '#projects',
      link_github: 'https://github.com/primadita/pokedex.git',
      link_livetest: 'https://felicia-primadita-tretter.developerakademie.net/pokedex/index.html'
    }
  ]
}
