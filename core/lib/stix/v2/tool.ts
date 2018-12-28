import {
    StixCoreType,
    StixIdentifier,
    StixDomainObject,
} from './core';
import { KillChainPhase } from './kill-chain-phase';
import { Mock } from '../../common/mock';

export class Tool extends StixDomainObject {

    public kill_chain_phases: KillChainPhase[] = [];
    public tool_version?: string;

    constructor(
        data?: any,
    ) {
        super({ type: StixCoreType.TOOL, ...data });
    }

}

export class ToolMock extends Mock<Tool> {

    public mockOne(name: string = 'pass-the-hash'): Tool {
        const id = StixIdentifier.generate(StixCoreType.TOOL, name);
        return new Tool({ id, name });
    }

}

export const ToolMockFactory = new ToolMock();
