import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from '../state/exercise.model';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.scss']
})
export class ExerciseCardComponent implements OnInit {
  @Input() exercise: Exercise = {} as Exercise;

  constructor() { }

  ngOnInit(): void {
  }
}
