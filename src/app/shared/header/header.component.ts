import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateDirective, TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavbarComponent, TranslatePipe, TranslateDirective, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  currentLanguage: string = 'en';
  savedLang!: string;
  

  constructor(private translate:TranslateService){
    // this.translate.addLangs(['de','en']);
    // this.currentLanguage = this.savedLang ? this.savedLang:'en';
    this.translate.setDefaultLang(this.currentLanguage);
    this.translate.use(this.currentLanguage);
  }

  useLanguage(language: string):void {
    this.currentLanguage = language;
    this.translate.use(language);
    localStorage.setItem('language',language);
  }
  ngOnInit(): void {
    this.savedLang = localStorage.getItem('language') || 'en';
    this.currentLanguage = this.savedLang;
    this.translate.use(this.currentLanguage);
  }
}
