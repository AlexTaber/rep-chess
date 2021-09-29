import { Component, OnInit } from '@angular/core';
import { NavBarQuery } from './nav-bar/state';
import { PacksService } from './packs/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public open$ = this.navBarQuery.open$;

  constructor(
    private navBarQuery: NavBarQuery,
    private packsService: PacksService,
  ) {}

  ngOnInit(): void {
    this.packsService.fetch();
  }
}
