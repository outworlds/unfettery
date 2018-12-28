import { async } from '@angular/core/testing';

import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {

    let pipe: CapitalizePipe;

    beforeEach(async(() => {
        pipe = new CapitalizePipe();
    }));

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should capitalize', () => {
        const value = 'test', expected = 'Test';
        expect(pipe.transform(value)).toEqual(expected);
    });

});
