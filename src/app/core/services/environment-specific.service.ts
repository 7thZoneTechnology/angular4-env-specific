import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Subscription, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { EnvSpecific } from '../models/env-specific';

@Injectable()
export class EnvironmentSpecificService {

  public envSpecific: EnvSpecific;
  private envSpecificSubject: BehaviorSubject<EnvSpecific> = new BehaviorSubject<EnvSpecific>(null);

  constructor(private http: Http) {
    console.log('EnvironmentSpecificService created');
  }

  public loadEnvironment() {
      return this.http.get('./assets/env-specific.json')
          .map((data) => data.json())
          .toPromise<EnvSpecific>();
  }

  public setEnvSpecific(es: EnvSpecific) {
    this.envSpecific = es;
    console.log(this.envSpecific);

    if (this.envSpecificSubject) {
        this.envSpecificSubject.next(this.envSpecific);
    }
  }

  public subscribe(caller: any, callback: (caller: any, es: EnvSpecific) => void) {
      this.envSpecificSubject
          .subscribe((es) => {
              if (es === null) {
                  return;
              }
              callback(caller, es);
          });
  }
}
