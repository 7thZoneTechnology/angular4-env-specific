import { Component } from '@angular/core';

import { EnvironmentSpecificService } from './core/services/environment-specific.service';
import { EnvSpecific } from './core/models/env-specific';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstLink: string;

  constructor(envSpecificSvc: EnvironmentSpecificService) {
    envSpecificSvc.subscribe(this, this.setLink);
  }

  setLink(caller: any, es: EnvSpecific) {
    const thisCaller = caller as AppComponent;
    thisCaller.firstLink = es.link1;
  }
}
