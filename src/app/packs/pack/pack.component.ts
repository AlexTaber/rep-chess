import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ExercisesQuery } from 'src/app/exercises/state';
import { PacksQuery, PacksService } from '../state';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.scss']
})
export class PackComponent implements OnInit {
  public pack$ = this.packsQuery.activePack$;
  public exercises$ = this.exercisesQuery.exercises$;

  constructor(
    private route: ActivatedRoute,
    private packsService: PacksService,
    private packsQuery: PacksQuery,
    private exercisesQuery: ExercisesQuery,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.updateActivePack(params));
  }

  private updateActivePack(params: Params): void {
    this.packsService.setActive(params.packId);
  }
}
