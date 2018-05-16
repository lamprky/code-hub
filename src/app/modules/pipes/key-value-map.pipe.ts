import { Pipe, PipeTransform } from '@angular/core';
import { SelectOption } from '../models/selectOption.model';

@Pipe({
  name: 'keyValueMap'
})
export class KeyValueMapPipe implements PipeTransform {
  transform(key: any, options: SelectOption[]): any {
    const selectedOption = options.find(option => option.key === +key);
    if (selectedOption) {
      return selectedOption.value;
    } else {
      return key;
    }
  }
}
