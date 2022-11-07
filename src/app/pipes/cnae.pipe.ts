import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnae'
})
export class CnaePipe implements PipeTransform {
  transform(value : string) {
    return value.replace(/(\d{4})(\d{1})(\d{2})/g,"\$1\-\$2\/\$3")
  }

}
