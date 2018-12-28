import { async } from '@angular/core/testing';
import * as _ from 'lodash';

import { FieldSortPipe } from './field-sort.pipe';

describe('FieldSortPipe', () => {

    let pipe: FieldSortPipe;

    const mockData = [
        { id: 1, name: 'd\'Artagnan', },
        { id: 2, name: 'Porthos', },
        { id: 3, name: 'Athos', },
        { id: 4, name: 'Aramis', },
    ];

    beforeEach(async(() => {
        pipe = new FieldSortPipe();
    }));

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('can sort', () => {
        const shuffledData = _.shuffle(mockData);
        expect(pipe.transform(shuffledData, 'id', true)).toEqual(mockData);
        expect(pipe.transform(shuffledData, 'name', false)).toEqual(mockData);
    });

});
