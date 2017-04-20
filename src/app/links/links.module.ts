import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksComponent } from './links.component';
import { LinksRoutingModule } from './links-route.routing';

@NgModule({
  imports: [
    CommonModule,
    LinksRoutingModule
  ],
  declarations: [LinksComponent]
})
export class LinksModule { }
