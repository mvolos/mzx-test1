import { Component, ViewChild } from '@angular/core';
import { Lib1Component } from 'lib1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app1';
  @ViewChild('') vchild: Lib1Component

}
