import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'identifierType'
})
export class IdentifierTypePipe implements PipeTransform {

    public transform(value: string): string {
        let type = value;
        if (value) {
            const valueElements = value.split('--');
            type = valueElements[0];
        }
        return type;
    }

}
