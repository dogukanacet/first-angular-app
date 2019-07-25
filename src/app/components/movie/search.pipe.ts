import { Pipe, PipeTransform } from '@angular/core';
import Movie from 'src/app/models/movie';




@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Movie[], filterText: string): Movie[] {
    if (!filterText) {
      return value
    }
    else {
      return value.filter(m =>
        m.original_title.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) !== -1)
    }
  }
}
