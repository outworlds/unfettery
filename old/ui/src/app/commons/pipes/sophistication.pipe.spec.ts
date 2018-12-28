import { async } from '@angular/core/testing';

import { SophisticationPipe } from './sophistication.pipe';

describe('SophisticationPipe', () => {

    let pipe: SophisticationPipe;

    const mockData = [-1, 'Novice', 'Practitioner', 'Expert', 'Innovator', 4];

    beforeEach(async(() => {
        pipe = new SophisticationPipe();
    }));

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('returns sophistication values', () => {
        mockData.forEach((data, index) => expect(pipe.transform(index - 1)).toEqual(data));
    });

});
