import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MoveChange, NgxChessBoardView } from 'ngx-chess-board';
import { Subscription } from 'rxjs';
import { Exercise, ExercisesQuery } from '../state';
import { ExerciseQuery, ExerciseService } from './state';

interface MoveChangeEvent extends MoveChange {
  move: string;
}

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit, OnDestroy {
  @Output() complete = new EventEmitter<void>();

  public exercise$ = this.exercisesQuery.activeExercise$;

  private exerciseSub: Subscription | undefined;

  private get board(): NgxChessBoardView | undefined {
    return this.exerciseQuery.getValue().board;
  }

  private get exercise(): Exercise | undefined {
    return this.exercisesQuery.getActive() as Exercise | undefined;
  }

  private get isUserTurn(): boolean {
    return this.exerciseQuery.getValue().moveIndex % 2 === 1;
  }

  @ViewChild('ngxBoard', {static: false}) set ngxBoard(board: NgxChessBoardView | undefined) {
    this.onSetBoard(board);
  };

  constructor(
    private exercisesQuery: ExercisesQuery,
    private exerciseService: ExerciseService,
    private exerciseQuery: ExerciseQuery,
  ) { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.exerciseSub?.unsubscribe();
  }

  public onMove(event: MoveChangeEvent): void {
    this.isUserTurn ? this.checkMove(event.move) : this.exerciseService.incrementMoveIndex();
  }

  private onSetBoard(board: NgxChessBoardView | undefined): void {
    if (board) {
      this.exerciseService.setBoard(board);
      this.setExerciseSub();
    }
  }

  private setExerciseSub(): void {
    this.exerciseSub = this.exercise$.subscribe(() => this.initializeExercise());
  }

  private initializeExercise(): void {
    this.exerciseService.resetMoveIndex();
    this.setFen();
    this.scheduleNextMoveOrEmitComplete();
  }

  private setFen(): void {
    this.board?.setFEN(this.exercise?.data.fen || "")
  }

  private scheduleNextMoveOrEmitComplete(): void {
    const nextMove = this.exercise?.data.moves[this.exerciseQuery.getValue().moveIndex];
    !!nextMove ? this.scheduleMove(nextMove) : this.emitComplete();
  }

  private scheduleMove(move: string): void {
    setTimeout(() => {
      this.board?.move(move);
    }, 500)
  }

  private checkMove(move: string): void {
    const nextMove = this.exercise?.data.moves[this.exerciseQuery.getValue().moveIndex];
    move === nextMove ? this.onSuccessfulMove() : this.undo();
  }

  private onSuccessfulMove(): void {
    this.exerciseService.incrementMoveIndex();
    this.scheduleNextMoveOrEmitComplete();
  }

  private undo(): void {
    this.board?.undo();
  }

  private emitComplete(): void {
    this.complete.emit();
  }
}
