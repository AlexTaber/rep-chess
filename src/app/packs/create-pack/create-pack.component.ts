import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacksFormPayload } from '../packs-form/state/packs-form.store';
import { PacksService } from '../state';

@Component({
  selector: 'app-create-pack',
  templateUrl: './create-pack.component.html',
  styleUrls: ['./create-pack.component.scss']
})
export class CreatePackComponent implements OnInit {

  constructor(
    private packsService: PacksService,
    private router: Router,
  ) { }

  ngOnInit(): void {}

  public onSubmit(payload: PacksFormPayload): void {
    this.packsService.create(payload);
    this.router.navigate(["/packs"]);
  }
}
