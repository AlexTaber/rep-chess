import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MoveChange, NgxChessBoardComponent } from 'ngx-chess-board';
import { Subscription } from 'rxjs';
import { Exercise, ExercisesQuery } from '../state';
import { pieceIcons } from './piece-icons';
import { ExerciseQuery, ExerciseService } from './state';
import { ExerciseFailEvent } from './state/exercise.store';

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
  @Output() fail = new EventEmitter<ExerciseFailEvent>();

  public exercise$ = this.exercisesQuery.activeExercise$;
  public pieceIcons = pieceIcons;

  private exerciseSub: Subscription | undefined;
  private board?: NgxChessBoardComponent;
  private pauseTime = 500;

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

  public onShowSolution(): void {
    this.exerciseService.setShowingSolution(true);
    const moves = this.exercise?.data.moves || [];
    const moveIndex = this.exerciseQuery.getValue().moveIndex;
    const remainingTurns = moves.length - this.exerciseQuery.getValue().moveIndex;
    [...Array(remainingTurns)].map((_, index) =>  this.scheduleMove(moves[moveIndex + index], index + 1));
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
    this.exerciseService.reset();
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
    !!nextMove ? this.scheduleMove(nextMove) : this.onComplete();
  }

  private scheduleMove(move: string, timeOffset: number = 1): void {
    setTimeout(() => {
      this.board?.move(move);
    }, this.pauseTime * timeOffset)
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

  private onComplete(): void {
    this.exerciseQuery.getValue().showingSolution ? this.onSkip() : this.onPass();
  }

  private onPass(): void {
    setTimeout(() => this.pass.emit(), this.pauseTime);
  }

  private onSkip(): void {
    setTimeout(() => this.emitFail({ shouldSkip: true }), this.pauseTime * 2);
  }

  private emitFail(event: ExerciseFailEvent = { shouldSkip: false }): void {
    this.fail.emit(event);
  }
}
