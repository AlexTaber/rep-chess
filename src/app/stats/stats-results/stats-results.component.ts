import { Component, Input, OnInit } from '@angular/core';
import { ExerciseCollection } from '../../exercises/state';

@Component({
  selector: 'app-stats-results',
  templateUrl: './stats-results.component.html',
  styleUrls: ['./stats-results.component.scss']
})
export class StatsResultsComponent implements OnInit {
  @Input() session?: ExerciseCollection;
  @Input() columns = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
