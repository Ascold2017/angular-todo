import {Injectable} from '@angular/core';
import {Theme} from "./models/app-theme.model";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public theme: Theme = Theme.LIGHT
  constructor() { }

  public toggleTheme() {
    this.theme = this.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    document.querySelector('html')?.classList.toggle('dark')
  }
}
