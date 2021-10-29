import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Media, ResponsiveConfig } from './media';

@Pipe({
  name: 'responsive'
})
export class ResponsivePipe implements PipeTransform {
  constructor(
    private media: Media
  ) {}

  transform(config: ResponsiveConfig): Observable<any> {
    return this.media.matches.pipe(
      distinctUntilChanged(),
      map(() => this.media.responsive(config))
    );
  }
}
