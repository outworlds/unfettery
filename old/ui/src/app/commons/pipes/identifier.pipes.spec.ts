import { async } from '@angular/core/testing';

import { IdentifierTypePipe } from './identifier-type.pipe';
import { IdentifierSummarizedPipe } from './identifier-summarized.pipe';

describe('Identifier Pipes', () => {

    let summaryPipe: IdentifierSummarizedPipe;
    let typePipe: IdentifierTypePipe;

    const mockData = [
        { type: 'abc', id: 'abc--0123456789-0123456789-012345-0123', summary: '0123' },
        { type: 'abc', id: 'abc--0123456789-0123456789-012345-4567', summary: '4567' },
        { type: 'def', id: 'def--0123456789-0123456789-012345-8901', summary: '8901' },
        { type: 'def', id: 'def--0123456789-0123456789-012345-2345', summary: '2345' },
        { type: 'ghi', id: 'ghi--0123456789-0123456789-012345-6789', summary: '6789' },
    ];

    beforeEach(async(() => {
        summaryPipe = new IdentifierSummarizedPipe();
        typePipe = new IdentifierTypePipe();
    }));

    it('create an instance', () => {
        expect(summaryPipe).toBeTruthy();
        expect(typePipe).toBeTruthy();
    });

    it('returns identifier parts', () => {
        mockData.forEach(data => {
            expect(typePipe.transform(data.id)).toEqual(data.type);
            expect(summaryPipe.transform(data.id)).toEqual(data.summary);
        });
    });

});
