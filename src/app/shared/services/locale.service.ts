import { Injectable } from '@angular/core';
import { DefaultLocales } from '../interfaces/locales';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  defaultLocale() : string {
    let currLocale = window.navigator.language;
    console.log('Initial Locale:', currLocale);

    let hasFound = false;
    while(!hasFound){
      for(let locale of DefaultLocales){
        if(locale.code === currLocale){
          hasFound = true;
          console.log('Locale found:', currLocale);
        }
      }

      if(!hasFound){
        let locales = currLocale.split('-');
        currLocale = locales.splice(0, locales.length-1).join('-');
        console.log('Trying more specific Locale:', currLocale);
      }
      if(currLocale.length<=0){
        return "pt";
      }
    }
    return currLocale;
  }

  setLocale(locale:string){
    localStorage.setItem('locale',locale);
  }

  getLocale():string{
    let currLocale = localStorage.getItem('locale');
    return (currLocale) ? currLocale : this.defaultLocale();
  }
}
