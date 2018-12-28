import {
    StixCoreType,
    StixIdentifier,
    StixDomainObject,
} from './core';
import { Mock } from '../../common/mock';

export class Sighting extends StixDomainObject {

    public first_seen?: number;
    public last_seen?: number;
    public count?: number;
    public sighting_of_ref!: string;
    public observed_data_refs: string[] = [];
    public where_sighted_refs: string[] = [];
    public summary: boolean = false;

    constructor(
        data?: any,
    ) {
        super({ type: StixCoreType.SIGHTING, ...data });
    }

}

export class SightingMock extends Mock<Sighting> {

    public mockOne(name: string = 'pass-the-hash'): Sighting {
        const id = StixIdentifier.generate(StixCoreType.SIGHTING, name);
        return new Sighting({ id, name });
    }

}

export const SightingMockFactory = new SightingMock();
