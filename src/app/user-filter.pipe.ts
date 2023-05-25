import { Pipe, PipeTransform } from '@angular/core';
import { RemoveAccentsPipe } from './remove-accents.pipe';
import { CombineWordsPipe } from './combine-words.pipe'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // constructor(private removeAccentsPipe: RemoveAccentsPipe, private combineWordsPipe : CombineWordsPipe){}
  transform(items: any[], searchQuery: string): any[] {
    if (!items || !searchQuery) {
      return items;
    }

    const formattedSearchQuery = this.formatSearchQuery(searchQuery);
    return items.filter(item => {
      const formattedItem = this.formatSearchQuery(item.name);
      return formattedItem.includes(formattedSearchQuery);
    });
  }

  private formatSearchQuery(text: string): string {
    return text.toLowerCase().replace(/\s/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}


// import { Pipe, PipeTransform } from '@angular/core';
// import { RemoveAccentsPipe } from './remove-accents.pipe';
// import { CombineWordsPipe } from './combine-words.pipe'

// @Pipe({
// name: 'filter'
// })
// export class FilterPipe implements PipeTransform {
// constructor(private removeAccentsPipe: RemoveAccentsPipe, private combineWordsPipe : CombineWordsPipe){}
// transform(items: any[], searchQuery: string): any[] {
// if (!items || !searchQuery) {
// return items;
// }

// const formattedSearchQuery = this.formatSearchQuery(this.removeAccentsPipe.transform(searchQuery));
// return items.filter(item => {
// const formattedItem = this.formatSearchQuery(this.removeAccentsPipe.transform(item.name));
// return formattedItem.includes(formattedSearchQuery);
// });
// }

// private formatSearchQuery(text: string): string {
// return text.toLowerCase().replace(/[^\w\s]/gi, '');
// }
// }