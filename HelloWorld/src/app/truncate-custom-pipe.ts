import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateCustom'
})
export class TruncateCustomPipe implements PipeTransform {

  transform(value: string, limit: number = 21): string {
    return value.length > limit ? value.substring(0, limit) + '...': value;
  }

}
