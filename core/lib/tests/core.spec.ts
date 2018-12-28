import { Mock } from '../common/mock';
import {
    StixCoreType,
    StixIdentifier,
    StixDomainObject,
    GranularMarking,
    ExternalReference,
    MockStix,
    StixCoreMockFactory,
    GranularMarkingMockFactory,
} from '../stix/v2/core';

const types = Object.keys(StixCoreType).filter((val) => !['from', 'unknown'].includes(val.toLowerCase()));

/****************************************************************************************************************************************************/

describe('GranularMarking', () => {

    let marking: GranularMarking;

    beforeEach(() => {
        marking = GranularMarkingMockFactory.mockOne();
    });

    afterEach(() => {
        console.log('granular marking', JSON.stringify(marking));
    });

    it('should have a constructor', () => {
        expect(marking).toBeDefined();
        expect(marking.marking_ref).toBeDefined();
        expect(marking.marking_ref.startsWith(StixCoreType.MARKING_DEFINITION.toString())).toBeTruthy();
    });

});

describe('ExternalReference', () => {

    let ref: ExternalReference;

    beforeEach(() => {
        ref = new ExternalReference('ext-ref', 'external reference mock');
    });

    afterEach(() => {
        console.log('external reference', JSON.stringify(ref));
    });

    it('should have a constructor', () => {
        expect(ref).toBeDefined();
    });

});

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

describe('StixCoreType', () => {

    it('.from() should handle every type', () => {
        types.forEach((type) => {
            const coreType = StixCoreType[type];
            expect(StixCoreType.from(type)).toEqual(coreType);
            expect(StixCoreType.from(coreType)).toEqual(coreType);
            expect(StixCoreType.from(coreType.toString())).toEqual(coreType);
        });
    });

});

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

describe('StixIdentifier', () => {

    let id: StixIdentifier | undefined;
    let type: StixCoreType;
    let hash: string;

    beforeEach(() => {
        type = StixCoreType[types[Math.floor(Math.random() * types.length)]];
        hash = `${Math.floor(Math.random() * 100000)}`.padStart(6, '0');
    });

    afterEach(() => {
        console.log('identifier', JSON.stringify({id}));
    });

    it('should construct', () => {
        id = new StixIdentifier(type, hash);
        expect(id).toBeDefined();
        expect(id.id).toEqual(id.toString());
        expect(id.id).toContain(type.toString());
        expect(id.id).toContain(hash);
        expect(id['_type']).toEqual(type);
        expect(JSON.stringify(id)).toContain(id.toString());
    });

    it('should build an id from a string', () => {
        id = StixIdentifier.build(`${type}--${hash}`);
        expect(id).toBeDefined();
        expect(id!.id).toContain(type.toString());
        expect(id!.id).toContain(hash);
    });

    it('should generate an id', () => {
        id = StixIdentifier.generate(type, `test-object-${hash}`);
        expect(id).toBeDefined();
        expect(id!.id).toContain(type.toString());
    });

});

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

describe('StixDomainObject', () => {

    let type: StixCoreType;
    let hash: string;
    let stix: MockStix;
    
    beforeEach(() => {
        type = StixCoreType[types[Math.floor(Math.random() * types.length)]];
        hash = `${Math.floor(Math.random() * 100000)}`.padStart(6, '0');
        stix = StixCoreMockFactory.mockOne({ type, id: new StixIdentifier(type, hash) });
    });

    afterEach(() => {
        console.log('mock stix', stix.toJson());
    });

    it('should have a constructor', () => {
        expect(stix).toBeDefined();
        expect(stix.type).toEqual(type);
        expect(stix.id).toBeDefined();
        expect(stix.id).toContain(type);
    });

});
