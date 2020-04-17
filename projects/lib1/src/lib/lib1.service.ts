import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Lib1Service {

  constructor() { }

  getstring():Observable<string>{
    return of('lib service works v3')
  }
}
