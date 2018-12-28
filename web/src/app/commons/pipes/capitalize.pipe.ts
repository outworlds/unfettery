import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

   public transform(value: any) {
        if (value) {
            const transformed = value
                .replace(/-/g, ' ')
                .replace(/\b([a-z])(\w+)/g, (_, g1, g2) => {
                    const word = g1.concat(g2);
                    if ( word === 'and' || word === 'or' || word === 'the') {
                        return word;
                    }
                    return g1.toUpperCase() + g2;
                });
            return transformed;
        }
        return value;
    }

}
