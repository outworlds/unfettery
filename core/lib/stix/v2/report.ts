import {
    StixCoreType,
    StixIdentifier,
    StixDomainObject,
} from './core';
import { Mock } from '../../common/mock';

export class Report extends StixDomainObject {

    public published!: number;
    public object_refs: string[] = [];

    constructor(
        data?: any,
    ) {
        super({ type: StixCoreType.REPORT, ...data });
    }

}

export class ReportMock extends Mock<Report> {

    public mockOne(name: string = 'pass-the-hash'): Report {
        const id = StixIdentifier.generate(StixCoreType.REPORT, name);
        return new Report({ id, name });
    }

}

export const ReportMockFactory = new ReportMock();
