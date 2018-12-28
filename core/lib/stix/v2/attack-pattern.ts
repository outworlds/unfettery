import {
    StixCoreType,
    StixIdentifier,
    StixDomainObject,
} from './core';
import { KillChainPhase } from './kill-chain-phase';
import { Mock } from '../../common/mock';

export class AttackPattern extends StixDomainObject {

    public kill_chain_phases: KillChainPhase[] = [];

    constructor(
        data?: any,
    ) {
        super({ type: StixCoreType.ATTACK_PATTERN, ...data });
    }

}

export class AttackPatternMock extends Mock<AttackPattern> {

    public mockOne(name: string = 'pass-the-hash'): AttackPattern {
        const id = StixIdentifier.generate(StixCoreType.ATTACK_PATTERN, name);
        return new AttackPattern({ id, name });
    }

}

export const AttackPatternMockFactory = new AttackPatternMock();
