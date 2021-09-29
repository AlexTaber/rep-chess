import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pack, PacksQuery } from 'src/app/packs/state';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-create-training-session',
  templateUrl: './create-training-session.component.html',
  styleUrls: ['./create-training-session.component.scss']
})
export class CreateTrainingSessionComponent implements OnInit {
  constructor(
    private packsQuery: PacksQuery,
    private router: Router,
  ) { }

  ngOnInit(): void {}

  public onSubmit(): void {
    this.navigateToTrainingSession();
  }

  private navigateToTrainingSession(): void {
    this.router.navigate(["packs", this.getActivePackId(), "train"]);
  }

  private getActivePackId(): ID | undefined {
    return this.packsQuery.getActivePack()?.id;
  }
}
