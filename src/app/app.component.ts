import { Component, OnInit } from '@angular/core';
import {AppService} from "./app.service";
import {Theme} from "./models/app-theme.model";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(public appService: AppService) {
  }

  themeControl = new FormControl(this.appService.theme)

  ngOnInit() {
    this.themeControl.valueChanges.subscribe(() => {
      this.appService.toggleTheme()
    })
  }

}
