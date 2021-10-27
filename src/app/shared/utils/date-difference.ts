import { TimeInSeconds } from "../../training-sessions/state";

export const dateDifference = (startDate: Date, endDate: Date): TimeInSeconds => {
  return Math.abs(startDate.getTime() - endDate.getTime()) / 1000;
}
