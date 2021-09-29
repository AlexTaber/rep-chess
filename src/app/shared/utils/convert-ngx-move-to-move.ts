import { MoveChangeEvent } from "src/app/exercises/exercise/state/exercise.store"

export const convertNgxMoveToMove = (event: MoveChangeEvent): string => {
  return isPromotion(event) ? convertPromotionMove(event) : event.move;
}

const isPromotion = (event: MoveChangeEvent): boolean => {
  return event.pgn.pgn.includes("=");
}

const convertPromotionMove = (event: MoveChangeEvent): string => {
  const promotionChar = event.pgn.pgn[event.pgn.pgn.length - 1].toLowerCase();
  return event.move.slice(0, -1) + promotionChar;
}
