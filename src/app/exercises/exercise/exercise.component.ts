import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MoveChange, NgxChessBoardComponent } from 'ngx-chess-board';
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
  @Output() init = new EventEmitter<Exercise>();
  @Output() pass = new EventEmitter<void>();
  @Output() fail = new EventEmitter<void>();

  public exercise$ = this.exercisesQuery.activeExercise$;

  private exerciseSub: Subscription | undefined;
  private board?: NgxChessBoardComponent;

  private get exercise(): Exercise | undefined {
    return this.exercisesQuery.getActive() as Exercise | undefined;
  }

  private get isUserTurn(): boolean {
    return this.exerciseQuery.getValue().moveIndex % 2 === 1;
  }

  @ViewChild('ngxBoard', {static: false}) set ngxBoard(board: NgxChessBoardComponent | undefined) {
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

  private onSetBoard(board: NgxChessBoardComponent | undefined): void {
    if (board) {
      this.board = board;
      this.setExerciseSub();
    }
  }

  private setExerciseSub(): void {
    this.exerciseSub = this.exercise$.subscribe(() => this.initializeExercise());
  }

  private initializeExercise(): void {
    this.exerciseService.resetMoveIndex();
    this.setFen();
    this.checkFlipBoard();
    this.scheduleNextMoveOrPass();
    this.init.emit(this.exercise);
  }

  private setFen(): void {
    this.board?.setFEN(this.exercise?.data.fen || "")
  }

  private checkFlipBoard(): void {
    if (this.board?.engineFacade.board.currentWhitePlayer) {
      this.board.reverse();
    }
  }

  private scheduleNextMoveOrPass(): void {
    const nextMove = this.exercise?.data.moves[this.exerciseQuery.getValue().moveIndex];
    !!nextMove ? this.scheduleMove(nextMove) : this.onPass();
  }

  private scheduleMove(move: string): void {
    setTimeout(() => {
      this.board?.move(move);
    }, 500)
  }

  private checkMove(move: string): void {
    const nextMove = this.exercise?.data.moves[this.exerciseQuery.getValue().moveIndex];
    move === nextMove ? this.onSuccessfulMove() : this.onFailedMove();
  }

  private onSuccessfulMove(): void {
    this.exerciseService.incrementMoveIndex();
    this.scheduleNextMoveOrPass();
  }

  private onFailedMove(): void {
    this.board?.undo();
    this.emitFail();
  }

  private onPass(): void {
    this.pass.emit();
  }

  private emitFail(): void {
    this.fail.emit();
  }
}
