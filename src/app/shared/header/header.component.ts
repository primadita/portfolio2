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
  // #region ATTRIBUTES
  
  /**
   * The currently active language. Default is `'en'`.
   */
  currentLanguage: string = 'en';

  /**
   * The saved language from localStorage. 
   * Used to persist the user's language preference.
   */
  savedLang!: string;

  /**
   * Indicates whether the navigation menu is open or closed.
   */
  menuOpen = false;
  // #endregion

  /**
   * Creates an instance of HeaderComponent.
   * Initializes the translation service with the default language.
   *
   * @param translate The translation service used to switch application languages.
   */
  constructor(private translate:TranslateService){
    this.translate.setDefaultLang(this.currentLanguage);
    this.translate.use(this.currentLanguage);
  }

  // #region METHODS

   /**
   * Changes the application language.
   *
   * @param language The language code (e.g., `'en'`, `'de'`, `'fr'`).
   */
  useLanguage(language: string):void {
    this.currentLanguage = language;
    this.translate.use(language);
    localStorage.setItem('language',language);
    this.toggleMenu();
  }

  /**
   * Initializes the component.
   * Loads the saved language from localStorage and sets it as the current language.
   */
  ngOnInit(): void {
    this.savedLang = localStorage.getItem('language') || 'en';
    this.currentLanguage = this.savedLang;
    this.translate.use(this.currentLanguage);
  }

   /**
   * Toggles the state of the navigation menu.
   * Logs the current menu state to the console.
   */
  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }
  // #endregion
}
