import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EnvSpecific } from '../core/models/env-specific';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  link1: string;
  link2: string;
  link3: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { envSpecific: EnvSpecific }) => {
        this.link1 = data.envSpecific.link1;
        this.link2 = data.envSpecific.link2;
        this.link3 = data.envSpecific.link3;
      });
  }
}
