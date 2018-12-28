import {
    StixCoreType,
    StixIdentifier,
    StixDomainObject,
} from './core';
import { KillChainPhase } from './kill-chain-phase';
import { Mock } from '../../common/mock';

export class Indicator extends StixDomainObject {

    public pattern!: string;
    public valid_from!: number;
    public valid_until!: number;
    public kill_chain_phases: KillChainPhase[] = [];

    constructor(
        data?: any,
    ) {
        super({ type: StixCoreType.INDICATOR, ...data });
    }

}

export class IndicatorMock extends Mock<Indicator> {

    public mockOne(name: string = 'pass-the-hash', pattern?: string): Indicator {
        const id = StixIdentifier.generate(StixCoreType.INDICATOR, name);
        return new Indicator({ id, name, pattern });
    }

}

export const IndicatorMockFactory = new IndicatorMock();
