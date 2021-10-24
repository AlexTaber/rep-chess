import { Pipe, PipeTransform } from '@angular/core';
import { addSeconds, format, intervalToDuration } from 'date-fns';
import { TimeInSeconds } from 'src/app/training-sessions/state';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(time: TimeInSeconds | undefined): string {
    return time ? this.formattedTime(time) : "";
  }

  private formattedTime(seconds: TimeInSeconds): string {
    const duration = intervalToDuration({ start: 0, end: seconds * 1000 })
    return `
      ${duration.hours ? duration.hours + 'h ' : ''}
      ${duration.minutes ? duration.minutes + 'm ' : ''}
      ${duration.seconds ? duration.seconds + 's' : ''}
    `
  }
}
