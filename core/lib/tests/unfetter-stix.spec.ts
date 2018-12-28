import {
    StixCoreType,
    StixIdentifier,
} from '../stix/v2/core';
import {
    StixType,
    StixObject,
    StixMockFactory,
} from '../unfetter/v3/stix';

const types = Object.keys(StixType).concat(Object.keys(StixCoreType)).filter((val) => !['from', 'unknown'].includes(val.toLowerCase()));

/****************************************************************************************************************************************************/

describe('Unfetter-ized StixCoreTypes', () => {

    it('.from() should handle every type', () => {
        types.forEach((type) => {
            const coreType = StixType[type];
            expect(StixType.from(type)).toEqual(coreType);
            expect(StixType.from(coreType)).toEqual(coreType);
            expect(StixType.from(coreType.toString())).toEqual(coreType);
        });
    });

});

describe('Unfetterized StixObject', () => {

    let type: StixType;
    let hash: string;
    let stix: StixObject;
    
    beforeEach(() => {
        type = StixType[types[Math.floor(Math.random() * types.length)]];
        hash = `${Math.floor(Math.random() * 100000)}`.padStart(6, '0');
        stix = StixMockFactory.mockOne({ type, id: new StixIdentifier(type, hash) });
    });

    afterEach(() => {
        console.log('mock unfetter stix', stix.toJson());
    });

    it('should have a constructor', () => {
        expect(stix).toBeDefined();
        expect(stix.type).toEqual(type);
        expect(stix.id).toBeDefined();
        expect(stix.id).toContain(type);
        expect(stix.metaProperties).toBeDefined();
        expect(stix.extendedProperties).toBeDefined();
    });

});
