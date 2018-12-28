import { async } from '@angular/core/testing';

import { ColumnSizePipe } from './column-size.pipe';

describe('ColumnSizePipe', () => {

    let pipe: ColumnSizePipe;

    beforeEach(async(() => {
        pipe = new ColumnSizePipe();
    }));

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('calculate correct column size', () => {
        expect(pipe.transform(1)).toBe(12);
        expect(pipe.transform(2)).toBe(6);
        expect(pipe.transform(3)).toBe(4);
        expect(pipe.transform(4)).toBe(3);
        expect(pipe.transform(5)).toBe(3);
        expect(pipe.transform(6)).toBe(2);
        expect(pipe.transform(7)).toBe(2);
        expect(pipe.transform(8)).toBe(2);
        expect(pipe.transform(9)).toBe(2);
        expect(pipe.transform(10)).toBe(2);
        expect(pipe.transform(11)).toBe(2);
        expect(pipe.transform(12)).toBe(1);
        expect(pipe.transform(20)).toBe(1);
        expect(pipe.transform(100)).toBe(1);
    });

});
