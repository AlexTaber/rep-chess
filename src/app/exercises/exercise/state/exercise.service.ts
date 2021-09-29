import { Injectable } from '@angular/core';
import { NgxChessBoardView } from 'ngx-chess-board';
import { ExerciseStore } from './exercise.store';

@Injectable({ providedIn: 'root' })
export class ExerciseService {

  constructor(private exerciseStore: ExerciseStore) {}

  public setBoard(board: NgxChessBoardView): void {
    this.exerciseStore.update({ board });
  }

  public incrementMoveIndex(): void {
    const currentMoveIndex = this.exerciseStore.getValue().moveIndex;
    this.exerciseStore.update({ moveIndex: currentMoveIndex + 1 });
  }

  public resetMoveIndex(): void {
    this.exerciseStore.update({ moveIndex: 0 });
  }
}
