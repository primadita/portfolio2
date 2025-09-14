import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgrammingLanguageListService {

  constructor() { }

  progLanguageList = [
    {
      imgPath: './assets/icons/icon_HTML.png',
      altText: 'HTML icon',
      name: 'HTML'
    },
    {
      imgPath: './assets/icons/icon_CSS.png',
      altText: 'CSS icon',
      name: 'CSS'
    },
    {
      imgPath: './assets/icons/icon_JS.png',
      altText: 'JavaScript icon',
      name: 'JavaScript'
    },
    {
      imgPath: './assets/icons/icon_Angular.png',
      altText: 'Angular icon',
      name: 'Angular'
    },
    {
      imgPath: './assets/icons/icon_Ts.png',
      altText: 'TypeScript icon',
      name: 'TypeScript'
    },
    {
      imgPath: './assets/icons/icon_GIT_small.png',
      altText: 'GIT icon',
      name: 'GIT'
    },
    {
      imgPath: './assets/icons/icon_GIT_small.png',
      altText: 'GIT icon',
      name: 'GIT'
    },
  ]
}
