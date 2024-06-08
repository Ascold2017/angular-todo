import { Component } from '@angular/core';
import {AppService} from "./app.service";
import {Theme} from "./models/app-theme.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(public appService: AppService) {
  }

  protected readonly Theme = Theme;
}
