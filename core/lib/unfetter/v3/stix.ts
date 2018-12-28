import {
    StixCoreType,
    StixIdentifier,
    StixDomainObject,
    GranularMarking,
    AttackPattern,
    CourseOfAction,
    Indicator,
} from '../../stix/v2';
import { Dictionary } from '../../common';
import { Metadata } from '.';

import { Mock } from '../../common/mock';

/****************************************************************************************************************************************************/

/**
 * @description Unfetter extensions to STIX core types
 */
export class StixType extends StixCoreType {

    public static readonly TACTIC = StixCoreType.ATTACK_PATTERN;

    public static readonly MITIGATION = StixCoreType.COURSE_OF_ACTION;

    public static readonly ANALYTIC = StixCoreType.INDICATOR;

    public static readonly BASELINE = new StixType('x-unfetter-baseline');
    public static readonly CATEGORY = new StixCoreType('x-unfetter-category');
    public static readonly CAPABILITY = new StixCoreType('x-unfetter-capability');
    public static readonly SENSOR = new StixCoreType('x-unfetter-sensor');
    
    public static readonly ASSESSMENT = new StixCoreType('x-unfetter-assessment');
    public static readonly SUBJECT = new StixCoreType('x-unfetter-subject');
    public static readonly QUESTION = new StixCoreType('x-unfetter-question');
    public static readonly SURVEY = new StixCoreType('x-unfetter-survey');
    
    public static readonly THREATBOARD = new StixCoreType('x-threat-board');
    public static readonly ARTICLE = new StixCoreType('x-unfetter-article');

    public static from(type: string | StixCoreType | StixType): StixType {
        if (typeof type === 'string') {
            const match = Object.entries(StixType).concat(Object.entries(StixCoreType))
                .filter(([key, value]) => key !== 'from')
                .find(([key, value]) => (key === type) || (value.value === type));
            if (match) {
                return StixType[match[0]];
            }
            return StixType.UNKNOWN;
        }
        return type;
    }

}

StixCoreType.from = StixType.from;

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

/**
 * @description Unfetter extensions to STIX domain objects
 */
export class StixObject extends StixDomainObject {

    public metaProperties: Metadata = {
        published: false,
    };
    public extendedProperties: Dictionary = {};

}

export type Tactic = AttackPattern;

export type Mitigation = CourseOfAction;

export type Analytic = Indicator;

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

export class MockStix extends StixObject {

    constructor(
        data?: any,
    ) {
        super({ type: 'mock', ...data });
    }

}

export class StixMock extends Mock<StixObject> {

    public mockOne(data?: any): StixObject {
        const num = Mock.rNumber();
        const id = StixIdentifier.build(`${data && data.type ? data.type : 'malware'}--${num}`);
        const stix = new MockStix({
            id,
            name: `name-${num}`,
            description: `description-${num}`,
            modified: new Date(),
            object_marking_refs: ['1', '2'],
            granular_markings: [new GranularMarking('1', ['description'])],
            ...data,
        });
        return stix;
    }

}

export const StixMockFactory = new StixMock();
