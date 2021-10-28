import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { guid } from '@datorama/akita';
import { NgxChessBoardComponent } from 'ngx-chess-board';
import { Subscription } from 'rxjs';
import { convertNgxMoveToMove } from 'src/app/shared/utils/convert-ngx-move-to-move';
import { dateDifference } from '../../shared/utils/date-difference';
import { Exercise, ExerciseAttempt, ExerciseAttemptStatus, ExercisesQuery } from '../state';
import { pieceIcons } from './piece-icons';
import { ExerciseQuery, ExerciseService } from './state';
import { MoveChangeEvent } from './state/exercise.store';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit, OnDestroy {
  @Output() init = new EventEmitter<Exercise>();
  @Output() complete = new EventEmitter<ExerciseAttempt>();

  public exercise$ = this.exercisesQuery.activeExercise$;
  public pauseTime$ = this.exerciseQuery.pauseTime$;
  public pieceIcons = pieceIcons;
  public size = 500;

  private exerciseSub: Subscription | undefined;
  private board?: NgxChessBoardComponent;
  private pauseTime = 250;

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
    event.move = convertNgxMoveToMove(event);
    this.isUserTurn ? this.checkMove(event.move) : this.exerciseService.incrementMoveIndex();
  }

  public onShowSolution(): void {
    this.exerciseService.setStatus("fail");
    this.exerciseService.setShowingSolution(true);
    const moves = this.exercise?.data.moves || [];
    const moveIndex = this.exerciseQuery.getValue().moveIndex;
    const remainingTurns = Math.min(moves.length - this.exerciseQuery.getValue().moveIndex, 2);
    [...Array(remainingTurns)].map((_, index) =>  this.scheduleMove(moves[moveIndex + index], index + 1));
  }

  public getAttempt(status: ExerciseAttemptStatus): ExerciseAttempt {
    const time =
      dateDifference(this.exerciseQuery.getValue().attemptStartTime, new Date()) -
      this.exerciseQuery.getValue().totalPauseTime;
    return {
      id: guid(),
      exerciseId: this.exercise!.id,
      status,
      time,
    }
  }

  public onPause(): void {
    this.exerciseService.pause();
  }

  public onUnpause(): void {
    this.exerciseService.unpause();
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
    this.exerciseService.setAttemptStartTime(new Date());
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
    this.exerciseService.setStatus("fail");
  }

  private onComplete(): void {
    this.exerciseQuery.getValue().status === "fail" ? this.onFail() : this.onPass();
  }

  private onPass(): void {
    this.exerciseService.setStatus("pass");
    setTimeout(() => this.emit("pass"), this.pauseTime);
  }

  private onFail(): void {
    setTimeout(() => this.emit("fail"), this.pauseTime);
  }

  private emit(status: ExerciseAttemptStatus): void {
    this.complete.emit(this.getAttempt(status));
  }
}
