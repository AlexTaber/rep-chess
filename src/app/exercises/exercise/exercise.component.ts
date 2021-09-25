import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxChessBoardView } from 'ngx-chess-board';
import { Subscription } from 'rxjs';
import { Exercise, ExercisesQuery, ExercisesService } from '../state';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit, OnDestroy {
  public exercise$ = this.exercisesQuery.activeExercise$;

  private exerciseSub: Subscription | undefined;

  @ViewChild('board', {static: false}) set board(board: NgxChessBoardView | undefined) {
    this.exerciseSub = this.getExerciseSubscriptionFromBoard(board);
  };

  constructor(
    private route: ActivatedRoute,
    private exercisesService: ExercisesService,
    private exercisesQuery: ExercisesQuery,
  ) { }

  ngOnInit(): void {
    this.subscribeToRouteParams();
  }

  ngOnDestroy(): void {
    this.exerciseSub?.unsubscribe();
  }

  private subscribeToRouteParams(): void {
    this.route.params.subscribe(params => this.exercisesService.setActive(params.exerciseId));
  }

  private getExerciseSubscriptionFromBoard(board: NgxChessBoardView | undefined): Subscription {
    return this.exercise$.subscribe((exercise) => this.setFen(exercise, board));
  }

  private setFen(exercise: Exercise | undefined, board: NgxChessBoardView | undefined): void {
    board?.setFEN(exercise?.data.fen || "")
  }
}
