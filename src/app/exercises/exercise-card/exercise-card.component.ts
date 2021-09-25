import { Component, Input, OnInit } from '@angular/core';
import { PacksQuery } from 'src/app/packs/state';
import { Exercise } from '../state/exercise.model';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.scss']
})
export class ExerciseCardComponent implements OnInit {
  public pack$ = this.packsQuery.activePack$;

  @Input() exercise: Exercise = {} as Exercise;

  constructor(
    private packsQuery: PacksQuery
  ) { }

  ngOnInit(): void {
  }
}
