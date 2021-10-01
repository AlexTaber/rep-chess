import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExercisesFilterInputPayload } from 'src/app/exercises/exercises-filter-input/state/exercises-filter-input.store';
import { PacksService } from '../state';
import { PacksFormQuery, PacksFormService } from './state';
import { PacksFormPayload } from './state/packs-form.store';

@Component({
  selector: 'app-packs-form',
  templateUrl: './packs-form.component.html',
  styleUrls: ['./packs-form.component.scss']
})
export class PacksFormComponent implements OnInit {
  @Output() submit = new EventEmitter<PacksFormPayload>();

  public payload$ = this.packsFormQuery.payload$;

  constructor(
    private packsFormQuery: PacksFormQuery,
    private packsFormService: PacksFormService,
  ) { }

  ngOnInit(): void {}

  public updateName(event: Event): void {
    this.updatePayload({ name: (event.target as HTMLInputElement).value })
  }

  public updateFilter(filter: ExercisesFilterInputPayload): void {
    this.updatePayload({ filter });
  }

  public onSubmit(payload: PacksFormPayload): void {
    this.submit.emit(payload);
  }

  private updatePayload(payload: Partial<PacksFormPayload>): void {
    this.packsFormService.updatePayload(payload);
  }
}
