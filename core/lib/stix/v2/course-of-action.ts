import {
    StixCoreType,
    StixIdentifier,
    StixDomainObject,
} from './core';
import { Mock } from '../../common/mock';

export class CourseOfAction extends StixDomainObject {

    public action?: undefined;

    constructor(
        data?: any,
    ) {
        super({ type: StixCoreType.COURSE_OF_ACTION, ...data });
    }

}

export class CourseOfActionMock extends Mock<CourseOfAction> {

    public mockOne(name: string = 'pass-the-hash'): CourseOfAction {
        const id = StixIdentifier.generate(StixCoreType.COURSE_OF_ACTION, name);
        return new CourseOfAction({ id, name });
    }

}

export const CourseOfActionMockFactory = new CourseOfActionMock();
