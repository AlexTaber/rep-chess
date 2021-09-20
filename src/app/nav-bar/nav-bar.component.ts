import { Component, OnInit } from '@angular/core';
import { NavBarService } from './state';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(
    private navBarService: NavBarService,
  ) { }

  ngOnInit(): void {}

  public onToggleSideBar(): void {
    this.navBarService.toggleOpen();
  }
}
