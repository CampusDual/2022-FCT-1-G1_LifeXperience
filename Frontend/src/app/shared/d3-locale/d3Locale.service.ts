import { Injectable } from '@angular/core';
import { OTranslateService } from 'ontimize-web-ngx';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

import { D3Locales } from './locales';
//TODO:Mirar para que sirve la variable d3 y el método locale()
//declare var d3: any;

@Injectable({
  providedIn: 'root'
})
export class D3LocaleService {

  constructor(
    private translateService: OTranslateService
  ) { }

  public getD3LocaleConfiguration(): any {
    // d3.locale(D3Locales[this.translateService.getCurrentLang().toUpperCase()])
    return D3Locales[this.translateService.getCurrentLang().toUpperCase()];
  }

}
