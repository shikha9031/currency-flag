import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, searchItem:string): any[] {

    // return empty array if array is falsy
    if (!items) { return []; }

    // return the original array if search text is empty
    if (!searchText) { return items; }

    // convert the searchText to lower case
    searchText = searchText.toLowerCase();

    // retrun the filtered array
    return items.filter(item => {
      if(searchItem === 'currency'){
        if (item && item['currencyCode'] && item['Currency']) {
          return (
           item['currencyCode'].toLowerCase().includes(searchText) ||
           item['Currency'].toLowerCase().includes(searchText) );
        }
      }
      else if(searchItem === 'country'){
        if (item['countryName']) {
          return (
           item['countryName'].toLowerCase().includes(searchText))
        }
      }
      return false;
    });
   }
}
