import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the RoundPipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'round'
})
@Injectable()
export class RoundPipe {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value: number): number {
        return Math.round(value);
    }
}
