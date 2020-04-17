import { Component, OnInit } from '@angular/core';
import { Lib1Service } from 'projects/lib1/src/lib/lib1.service';

@Component({
  selector: 'lib-lib1',
  template: `
    <p>
      lib1 works!
      {{service.getstring()|async}}
    </p>
  `,
  styles: []
})
export class Lib1Component implements OnInit {

  constructor(public service: Lib1Service) { }

  ngOnInit(): void {
  }

}
