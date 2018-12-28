import {
    StixCoreType,
    StixIdentifier,
    StixDomainObject,
} from './core';
import { Mock } from '../../common/mock';

export interface ObservableObject {
    type: string;
}

export class ObservedData extends StixDomainObject {

    public first_observed!: number;
    public last_observed!: number;
    public number_observed!: number;
    public objects: ObservableObject[] = [];

    constructor(
        data?: any,
    ) {
        super({ type: StixCoreType.OBSERVED_DATA, ...data });
    }

}

export class ObservedDataMock extends Mock<ObservedData> {

    public mockOne(name: string = 'pass-the-hash'): ObservedData {
        const id = StixIdentifier.generate(StixCoreType.OBSERVED_DATA, name);
        return new ObservedData({ id, name });
    }

}

export const ObservedDataMockFactory = new ObservedDataMock();
