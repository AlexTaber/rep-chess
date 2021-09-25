import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ExercisesQuery, ExercisesService } from 'src/app/exercises/state';
import { Pack, PacksQuery, PacksService } from '../state';

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
    private exercisesService: ExercisesService,
    private exercisesQuery: ExercisesQuery,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.updateActivePack(params));
  }

  private updateActivePack(params: Params): void {
    this.packsService.setActive(params.packId);
    this.exercisesService.set((this.packsQuery.getActive() as Pack)?.exercises);
  }
}
