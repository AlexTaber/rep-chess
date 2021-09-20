import { Component } from '@angular/core';
import { NavBarQuery } from './nav-bar/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public open$ = this.navBarQuery.open$;

  constructor(
    private navBarQuery: NavBarQuery,
  ) {}
}
