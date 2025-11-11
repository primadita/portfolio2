import { Injectable } from '@angular/core';
import { Skill } from '../shared/interfaces/skill';

@Injectable({
  providedIn: 'root'
})
export class ProgrammingLanguageListService {

  constructor() { }

  progLanguageList: Skill[] = [
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
      imgPath: './assets/icons/icon_Firebase.png',
      altText: 'Firebase icon',
      name: 'Firebase'
    },
    {
      imgPath: './assets/icons/icon_API.png',
      altText: 'API icon',
      name: 'API'
    },
  ]
}
