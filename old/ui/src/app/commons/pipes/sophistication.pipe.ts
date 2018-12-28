import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sophistication'
})
export class SophisticationPipe implements PipeTransform {

    private SOPHISTICATIONS = ['Novice', 'Practitioner', 'Expert', 'Innovator'];

    public transform(value: any) {
        return this.SOPHISTICATIONS[value] || value;
    }

}
