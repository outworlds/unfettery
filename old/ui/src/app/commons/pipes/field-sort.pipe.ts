import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortByField'
})
export class FieldSortPipe implements PipeTransform {

    public transform(array: any[], field: string, ascending: boolean = true): any[] {
        array.sort((a: any, b: any) => {
            if (a[field] > b[field]) {
                if (ascending) {
                    return 1;
                }
                return -1;
            } else if (a[field] < b[field]) {
                if (ascending) {
                    return -1;
                }
                return 1;
            }
            return 0;
        });
        return array;
    }

}
