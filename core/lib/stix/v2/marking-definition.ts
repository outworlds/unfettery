import {
    StixCoreType,
    StixIdentifier,
    StixDomainObject,
} from './core';
import { Mock } from '../../common/mock';

export abstract class MarkingDefinition extends StixDomainObject {

    constructor(
        data?: any,
    ) {
        super({ type: StixCoreType.MARKING_DEFINITION, ...data });
    }

    abstract get definition_type(): string;

    abstract get definition(): any;

    protected getCoreProperties() {
        return [ ...super.getCoreProperties(), 'definition_type', 'definition'];
    }

}

export interface TLPMarkingData {
    tlp: 'white' | 'red' | 'amber' | 'green';
}
export class TLPMarkingDefinition extends MarkingDefinition {

    protected tlp: TLPMarkingData;

    constructor(
        data?: any,
    ) {
        let tlp;
        if (data) {
            if (data.tlp) {
                tlp = data.tlp;
            } else if (data.definition && data.definition.tlp) {
                tlp = data.definition.tlp;
            }
        }
        super({ ...data });
        this.tlp = tlp;
    }

    get definition_type(): string { return 'tlp'; }

    get definition(): any { return { tlp: this.tlp }; }

}

export interface StatementMarkingData {
    statement: string;
}
export class StatementMarkingDefinition extends MarkingDefinition {

    protected statement: string;

    constructor(
        data?: any,
    ) {
        let statement;
        if (data) {
            if (data.statement) {
                statement = data.statement;
            } else if (data.definition && data.definition.statement) {
                statement = data.definition.statement;
            }
        }
        super({ ...data });
        this.statement = statement;
    }

    get definition_type(): string { return 'statement'; }

    get definition(): any { return { statement: this.statement }; }

}

export class MarkingDefinitionMock extends Mock<MarkingDefinition> {

    public mockOne(name: string = 'pass-the-hash', type: string = '', definition: any = {}): MarkingDefinition {
        const id = StixIdentifier.generate(StixCoreType.MARKING_DEFINITION, name);
        if (type === 'tlp') {
            return new TLPMarkingDefinition({ id, name, tlp: definition });
        } else if (type === 'statement') {
            return new StatementMarkingDefinition({ id, name, statement: definition });
        }
        return new StatementMarkingDefinition({ _definition_type: undefined });
    }

}

export const MarkingDefinitionMockFactory = new MarkingDefinitionMock();
