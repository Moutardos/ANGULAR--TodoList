import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipe implements PipeTransform {

  transform(timestamp: number, hourBool:boolean): unknown {
    const date: Date = new Date(timestamp);
    let result = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    if (hourBool) {
      result += ` ${date.getHours()}:${date.getMinutes()}`;
    }
    return result;  }

}
