import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { NavBarQuery, NavBarService } from './nav-bar/state';
import { PacksQuery, PacksService } from './packs/state';
import { filter } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public open$ = this.navBarQuery.open$;

  constructor(
    private navBarQuery: NavBarQuery,
    private navBarService: NavBarService,
    private packsService: PacksService,
    private packsQuery: PacksQuery,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.fetchPacks();
    this.subscribeToRouterEvents();
  }

  private fetchPacks(): void {
    if (this.packsQuery.getAll().length == 0) {
      this.packsService.fetch();
    }
  }

  private subscribeToRouterEvents(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationStart)
    ).subscribe({
      next: () => this.navBarService.setOpen(false)
    });
  }
}
