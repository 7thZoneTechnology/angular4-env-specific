import { Component, OnInit } from '@angular/core';

import { EnvironmentSpecificService } from '../core/services/environment-specific.service';

@Component({
  selector: 'app-reuse-links',
  templateUrl: './reuse-links.component.html',
  styleUrls: ['./reuse-links.component.css']
})
export class ReuseLinksComponent implements OnInit {

  link1: string;
  link2: string;
  link3: string;

  constructor(private envSpecificSvc: EnvironmentSpecificService) { }

  ngOnInit() {
    this.link1 = this.envSpecificSvc.envSpecific.link1;
    this.link2 = this.envSpecificSvc.envSpecific.link2;
    this.link3 = this.envSpecificSvc.envSpecific.link3;
  }
}
