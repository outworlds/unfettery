import {
    StixType,
    StixObject,
    Mitigation,
    Analytic,
} from './stix';
import { StixIdentifier } from '../../stix/v2';
import { Dictionary } from '../../common';
import { Mock } from '../../common/mock';

/****************************************************************************************************************************************************/

export enum OptionGroup {
    PROTECT = 0,
    MITIGATE = 0,
    DETECT = 1,
    INDICATE = 1,
    RESPOND = 2,
}

export enum AnswerEnum {
    UNANSWERED = '',
    NOT_APPLICABLE = 'NA',
    NONE = 'N',
    LOW = 'L',
    MEDIUM = 'M',
    SIGNIFICANT = 'S',
}

export interface AnswerOption {
    group: OptionGroup;
    answers: AnswerEnum[];
}

/**
 * @description used by the UI to create a single group of related questions
 *              The `name` property serves as the direct question posed to the user.
 *              The `description` property serves to define the question more clearly to them.
 *              A Question can then have multiple groups of possible answers the user can provide in an Assessment survey.
 */
export class AssessmentQuestion extends StixObject {

    public options: AnswerOption[];

    constructor(
        data?: any
    ) {
        super({ type: StixType.QUESTION, ...data });
    }

}

export class AssessmentQuestionMock extends Mock<AssessmentQuestion> {

    public mockOne(name: string = 'test-question'): AssessmentQuestion {
        return new AssessmentQuestion({
            name,
            id: StixIdentifier.generate(StixType.QUESTION, name),
            options: [
                { group: 'detect', answers: [] },
                { group: 'protect', answers: [] },
                { group: 'respond', answers: [] },
            ],
        });
    }

}

export const AssessmentQuestionMockFactory = new AssessmentQuestionMock();

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

/**
 * @description unfetter extension of stix to include sensor
 */
export class Sensor extends StixObject {

    constructor(
        data?: any
    ) {
        super({ type: StixType.SENSOR, ...data });
    }

}

/**
 * @description a capability could represent a product, ex. AntiVirus software
 */
export class AssessmentCapability extends StixObject {

    private subject_ref: string; // ref to a sensor, mitigation or analytic
    private VALID_REFS = [
        StixType.SENSOR,
        StixType.MITIGATION,
        StixType.ANALYTIC,
    ].map((type) => `${type}--`);

    public questions: AssessmentQuestion[] = [];

    /**
     * @description generate an object with default fields for this type
     */
    constructor(
        data?: any
    ) {
        super({ type: StixType.CAPABILITY, ...data });
    }

    public get subject() { return this.subject_ref; }
    public set subject(subject: string | Sensor | Mitigation | Analytic) {
        let id: any = subject;
        if (typeof subject !== 'string') {
            id = subject.id;
        }
        if (!id || !this.VALID_REFS.some((prefix) => id.startsWith(prefix))) {
            throw new Error('Invalid capability; subject must be a reference to a sensor, mitigation or analytic');
        }
        this.subject_ref = id;
    }

}

export class AssessmentCapabilityMock extends Mock<AssessmentCapability> {

    private testSubject = StixIdentifier.generate(StixType.SENSOR, 'test-sensor');

    public mockOne(name = 'test-capability', subject: string = this.testSubject.id): AssessmentCapability {
        return new AssessmentCapability({
            name,
            subject,
            id: StixIdentifier.generate(StixType.CAPABILITY, name),
            created_by_ref: StixIdentifier.generate(StixType.IDENTITY, 'tester'),
        });
    }

}

export const AssessmentCapabilityMockFactory = new AssessmentCapabilityMock();

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

/**
 *  @description Category is a generic bin name for a real products capability, ex. Network Monitor
 */
export class AssessmentCategory extends StixObject {

    public capabilities: AssessmentCapability[] = [];

    /**
     * @description generate an object with default fields for this type
     */
    constructor(data?: object) {
        super({ type: StixType.CATEGORY, ...data });
    }

}

export class AssessmentCategoryMock extends Mock<AssessmentCategory> {

    public mockOne(name: string = 'test-category'): AssessmentCategory {
        return new AssessmentCategory({
            name,
            id: StixIdentifier.generate(StixType.CATEGORY, name),
            created_by_ref: StixIdentifier.generate(StixType.IDENTITY, 'tester'),
            capabilities: AssessmentCapabilityMockFactory.mockMany(undefined, 3),
        });
    }

}

export const AssessmentCategoryMockFactory = new AssessmentCategoryMock();

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

export class AssessmentBaseline extends StixObject {

    public baseline_version: string;
    public category_refs: string[];

    constructor(
        data?: any
    ) {
        super({ type: StixType.BASELINE, ...data });
    }

}

// @todo needs a mock

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

export interface OptionValue {
    answer: AnswerEnum;
    rating: number;
    weight: number;
}

export interface AssessmentRating {
    question_ref: string;
    answers: Dictionary<OptionValue>;
}

/**
 * @description Object assessment represents attack pattern to capability answers
 *  This object is an Unfetter Stix extension
 */
export class AssessmentSurvey extends StixObject {

    // object ref is a capability id
    public capability_ref: string;

    // AssessedObject has a attack pattern ids
    public ratings: AssessmentRating[];

    /**
     * @description generate an object with default fields for this type
     */
    constructor(
        data?: object
    ) {
        super({ type: StixType.SURVEY, ...data });
    }

}

export class AssessmentSurveyMock extends Mock<AssessmentSurvey> {

    public mockOne(name: string = 'test-survey', capabilityName: string = 'test-capability'): AssessmentSurvey {
        return new AssessmentSurvey({
            name,
            id: StixIdentifier.generate(StixType.SURVEY, name),
            created_by_ref: StixIdentifier.generate(StixType.IDENTITY, 'tester'),
            capability_ref: StixIdentifier.generate(StixType.CAPABILITY, capabilityName),
            ratings: this.mockRatings(3),
        });
    }

    public mockRating(question: string = 'test-question') {
        return null;
    }

    public mockRatings(count: number = 1) {
        return [];
    }

}

export const AssessmentSurveyMockFactory = new AssessmentSurveyMock();

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

export class Assessment extends StixObject {

    public baseline_ref: string;
    public surveys: AssessmentSurvey[];

    // @todo needs ctor
}

// @todo needs mock
