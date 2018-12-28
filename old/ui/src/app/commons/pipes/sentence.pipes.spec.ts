import { async } from '@angular/core/testing';

import { FirstSentencePipe } from './first-sentence.pipe';
import { RestSentencePipe } from './rest-sentence.pipe';

describe('Sentence Pipes', () => {

    let fsPipe: FirstSentencePipe;
    let rsPipe: RestSentencePipe;

    const mockData = [
        'It was a dark and stormy night.',
        'The rain fell in torrents.',
        'Behind the trees clouds scudded frantically across the sky.'
    ];

    beforeEach(async(() => {
        fsPipe = new FirstSentencePipe();
        rsPipe = new RestSentencePipe();
    }));

    it('create an instance', () => {
        expect(fsPipe).toBeTruthy();
        expect(rsPipe).toBeTruthy();
    });

    it('returns valid sentence', () => {
        expect(fsPipe.transform(mockData.join(' '))).toEqual(mockData[0]);
        expect(rsPipe.transform(mockData.join(' '))).toEqual([` ${mockData[1]}`]);
    });

});
