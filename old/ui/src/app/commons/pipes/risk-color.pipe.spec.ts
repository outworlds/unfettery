import { RiskColorPipe } from './risk-color.pipe';
import { async } from '@angular/core/testing';

describe('RiskColorPipe', () => {

    let pipe: RiskColorPipe;

    const mockData = [
        { value: 0, expected: 'rgb(0,255,0)' },
        { value: .25, expected: 'rgb(63,191,0)' },
        { value: .50, expected: 'rgb(127,127,0)' },
        { value: .75, expected: 'rgb(191,63,0)' },
        { value: 1, expected: 'rgb(255,0,0)' },
    ];

    beforeEach(async(() => {
        pipe = new RiskColorPipe();
    }));

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('creates correct colors', () => {
        mockData.forEach(data => expect(pipe.transform(data.value)).toEqual(data.expected));
    });

});
