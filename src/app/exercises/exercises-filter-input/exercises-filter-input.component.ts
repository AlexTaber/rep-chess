import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { exerciseThemes } from '../state';
import { ExercisesFilterInputQuery, ExercisesFilterInputService } from './state';
import { ExercisesFilterInputPayload } from './state/exercises-filter-input.store';

@Component({
  selector: 'app-exercises-filter-input',
  templateUrl: './exercises-filter-input.component.html',
  styleUrls: ['./exercises-filter-input.component.scss']
})
export class ExercisesFilterInputComponent implements OnInit {
  @Output() filterChange = new EventEmitter<ExercisesFilterInputPayload>();

  public payload$ = this.query.payload$;
  public themes = exerciseThemes;

  constructor(
    private service: ExercisesFilterInputService,
    private query: ExercisesFilterInputQuery,
  ) { }

  ngOnInit(): void {}

  public onRatingRangeLowChange(event: Event): void {
    this.service.updateRatingRangeLow(parseInt((event.target as HTMLInputElement).value))
    this.emitChange();
  }

  public onRatingRangeHighChange(event: Event): void {
    this.service.updateRatingRangeHigh(parseInt((event.target as HTMLInputElement).value))
    this.emitChange();
  }

  public onUpdateThemes(event: MatSelectChange): void {
    this.service.updateThemes(event.value)
    this.emitChange();
  }

  private emitChange(): void {
    this.filterChange.emit(this.query.getValue().payload);
  }
}
