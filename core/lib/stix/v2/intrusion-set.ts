import {
    StixCoreType,
    StixIdentifier,
    StixDomainObject,
    ATTACK_RESOURCE_LEVEL,
    ATTACK_MOTIVATION,
} from './core';
import { Mock } from '../../common/mock';

export class IntrusionSet extends StixDomainObject {

    public aliases: string[] = [];
    public first_seen?: number;
    public last_seen?: number;
    public goals: string[] = [];
    public resource_level?: ATTACK_RESOURCE_LEVEL;
    public primary_motivation?: ATTACK_MOTIVATION;
    public secondary_motivation?: ATTACK_MOTIVATION;

    constructor(
        data?: any,
    ) {
        super({ type: StixCoreType.INTRUSION_SET, ...data });
    }

}

export class IntrusionSetMock extends Mock<IntrusionSet> {

    public mockOne(name: string = 'pass-the-hash'): IntrusionSet {
        const id = StixIdentifier.generate(StixCoreType.INTRUSION_SET, name);
        return new IntrusionSet({ id, name });
    }

}

export const IntrusionSetMockFactory = new IntrusionSetMock();
