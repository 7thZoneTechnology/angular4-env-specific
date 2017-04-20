import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LinksModule } from './links/links.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { ReuseLinksComponent } from './reuse-links/reuse-links.component';

@NgModule({
  declarations: [
    AppComponent,
    ReuseLinksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    LinksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
