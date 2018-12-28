import { StixCoreType } from '../stix/v2/core';

import { AttackPattern, AttackPatternMockFactory } from '../stix/v2/attack-pattern';
import { Campaign, CampaignMockFactory } from '../stix/v2/campaign';
import { CourseOfAction, CourseOfActionMockFactory } from '../stix/v2/course-of-action';
import { Identity, IdentityMockFactory } from '../stix/v2/identity';
import { Indicator, IndicatorMockFactory } from '../stix/v2/indicator';
import { IntrusionSet, IntrusionSetMockFactory } from '../stix/v2/intrusion-set';
import { KillChainPhase, KillChainPhaseMockFactory } from '../stix/v2/kill-chain-phase';
import { Malware, MalwareMockFactory } from '../stix/v2/malware';
import { MarkingDefinition, TLPMarkingDefinition, MarkingDefinitionMockFactory } from '../stix/v2/marking-definition';
import { ObservedData, ObservedDataMockFactory } from '../stix/v2/observed-data';
import { Report, ReportMockFactory } from '../stix/v2/report';
import { Sighting, SightingMockFactory } from '../stix/v2/sighting';
import { ThreatActor, ThreatActorMockFactory } from '../stix/v2/threat-actor';
import { Tool, ToolMockFactory } from '../stix/v2/tool';
import { Vulnerability, VulnerabilityMockFactory } from '../stix/v2/vulnerability';

/****************************************************************************************************************************************************/

/**
 * STIX attack pattern
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
describe('Attack Pattern STIX model', () => {

    let stix: AttackPattern;

    afterEach(() => {
        console.log('ap', stix.toJson());
    });

    it('should have a constructor', () => {
        stix = AttackPatternMockFactory.mockOne('test-attack');
        expect(stix).toBeDefined();
        expect(stix.id).toBeDefined();
        expect(stix.type).toBeDefined();
        expect(stix.type).toEqual(StixCoreType.ATTACK_PATTERN);
    });

});

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

/**
 * STIX campaign
 */
describe('Campaign STIX model', () => {

    let stix: Campaign;

    afterEach(() => {
        console.log('campaign', stix.toJson());
    });

    it('should have a constructor', () => {
        stix = CampaignMockFactory.mockOne('test-campaign');
        expect(stix).toBeDefined();
        expect(stix.id).toBeDefined();
        expect(stix.type).toBeDefined();
        expect(stix.type).toEqual(StixCoreType.CAMPAIGN);
    });

});

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

/**
 * STIX course of action
 */
describe('Course of Action STIX model', () => {

    let stix: CourseOfAction;

    afterEach(() => {
        console.log('course', stix.toJson());
    });

    it('should have a constructor', () => {
        stix = CourseOfActionMockFactory.mockOne('test-scenario');
        expect(stix).toBeDefined();
        expect(stix.id).toBeDefined();
        expect(stix.type).toBeDefined();
        expect(stix.type).toEqual(StixCoreType.COURSE_OF_ACTION);
    });

});

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

/**
 * STIX identity
 */
describe('Identity STIX model', () => {

    let stix: Identity;

    afterEach(() => {
        console.log('identity', stix.toJson());
    });

    it('should have a constructor', () => {
        stix = IdentityMockFactory.mockOne('test-identity');
        expect(stix).toBeDefined();
        expect(stix.id).toBeDefined();
        expect(stix.type).toBeDefined();
        expect(stix.type).toEqual(StixCoreType.IDENTITY);
    });

});

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

/**
 * STIX indicator
 */
describe('Indicator STIX model', () => {

    let stix: Indicator;

    afterEach(() => {
        console.log('indicator', stix.toJson());
    });

    it('should have a constructor', () => {
        const pattern: string = '[process:pid=5]';
        stix = IndicatorMockFactory.mockOne('test-indicator', pattern);
        expect(stix).toBeDefined();
        expect(stix.id).toBeDefined();
        expect(stix.type).toBeDefined();
        expect(stix.type).toEqual(StixCoreType.INDICATOR);
        expect(stix.pattern).toBeDefined();
        expect(stix.pattern).toEqual(pattern);
    });
});

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

/**
 * STIX intrusion set
 */
describe('Intrusion set STIX model', () => {

    let stix: IntrusionSet;

    afterEach(() => {
        console.log('intrusion set', stix.toJson());
    });

    it('should have a constructor', () => {
        stix = IntrusionSetMockFactory.mockOne('test-intrusions');
        expect(stix).toBeDefined();
        expect(stix.id).toBeDefined();
        expect(stix.type).toBeDefined();
        expect(stix.type).toEqual(StixCoreType.INTRUSION_SET);
    });

});

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

/**
 * STIX kill chain phase
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
describe('Kill Chain Phase model', () => {

    let phase: KillChainPhase;

    afterEach(() => {
        console.log('kill chain', JSON.stringify(phase));
    });

    it('should have a constructor', () => {
        phase = KillChainPhaseMockFactory.mockOne();
        expect(phase).toBeDefined();
        expect(phase.kill_chain_name).toBeDefined();
        expect(phase.phase_name).toBeDefined();
    });

});

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

/**
 * STIX malware
 */
describe('Malware STIX model', () => {

    let stix: Malware;

    afterEach(() => {
        console.log('malware', stix.toJson());
    });

    it('should have a constructor', () => {
        stix = MalwareMockFactory.mockOne('test-virus');
        expect(stix).toBeDefined();
        expect(stix.id).toBeDefined();
        expect(stix.type).toBeDefined();
        expect(stix.type).toEqual(StixCoreType.MALWARE);
    });

});

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

/**
 * STIX marking definition
 */
describe('Marking Definition STIX model', () => {

    let stix: MarkingDefinition;

    afterEach(() => {
        console.log('marking', stix.toJson());
    });

    it('should make TLPs', () => {
        stix = MarkingDefinitionMockFactory.mockOne('my-tlp', 'tlp', 'amber');
        expect(stix).toBeDefined();
        expect(stix.id).toBeDefined();
        expect(stix.type).toBeDefined();
        expect(stix.type).toEqual(StixCoreType.MARKING_DEFINITION);
        expect(stix.definition_type).toBeDefined();
        expect(stix.definition_type).toEqual('tlp');
        expect(stix.definition).toBeDefined();
        expect(stix.definition).toBeDefined();
        expect(stix.definition.tlp).toBeDefined();
        expect(stix.definition.tlp).toEqual('amber');
    });

    it('should make Statements', () => {
        stix = MarkingDefinitionMockFactory.mockOne('my-statement', 'statement', 'This is a marking');
        expect(stix).toBeDefined();
        expect(stix.id).toBeDefined();
        expect(stix.type).toBeDefined();
        expect(stix.type).toEqual(StixCoreType.MARKING_DEFINITION);
        expect(stix.definition_type).toBeDefined();
        expect(stix.definition_type).toEqual('statement');
        expect(stix.definition).toBeDefined();
        expect(stix.definition).toBeDefined();
        expect(stix.definition.statement).toBeDefined();
        expect(stix.definition.statement).toEqual('This is a marking');
    });

});

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

/**
 * STIX observed data
 */
describe('Observed Data STIX model', () => {

    let stix: ObservedData;

    afterEach(() => {
        console.log('observed data', stix.toJson());
    });

    it('should have a constructor', () => {
        stix = ObservedDataMockFactory.mockOne('test-data');
        expect(stix).toBeDefined();
        expect(stix.id).toBeDefined();
        expect(stix.type).toBeDefined();
        expect(stix.type).toEqual(StixCoreType.OBSERVED_DATA);
    });

});

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

/**
 * STIX report
 */
describe('Report STIX model', () => {

    let stix: Report;

    afterEach(() => {
        console.log('report', stix.toJson());
    });

    it('should have a constructor', () => {
        stix = ReportMockFactory.mockOne('test-report');
        expect(stix).toBeDefined();
        expect(stix.id).toBeDefined();
        expect(stix.type).toBeDefined();
        expect(stix.type).toEqual(StixCoreType.REPORT);
    });

});

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

/**
 * STIX sighting
 */
describe('Sighting STIX model', () => {

    let stix: Sighting;

    afterEach(() => {
        console.log('sighting', stix.toJson());
    });

    it('should have a constructor', () => {
        stix = SightingMockFactory.mockOne('test-sighting');
        expect(stix).toBeDefined();
        expect(stix.id).toBeDefined();
        expect(stix.type).toBeDefined();
        expect(stix.type).toEqual(StixCoreType.SIGHTING);
    });

});

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

/**
 * STIX threat actor
 */
describe('Threat actor STIX model', () => {

    let stix: ThreatActor;

    afterEach(() => {
        console.log('threat actor', stix.toJson());
    });

    it('should have a constructor', () => {
        stix = ThreatActorMockFactory.mockOne('test-threat-actor');
        expect(stix).toBeDefined();
        expect(stix.id).toBeDefined();
        expect(stix.type).toBeDefined();
        expect(stix.type).toEqual(StixCoreType.THREAT_ACTOR);
    });

});

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

/**
 * STIX tool
 */
describe('Tool STIX model', () => {

    let stix: Tool;

    afterEach(() => {
        console.log('tool', stix.toJson());
    });

    it('should have a constructor', () => {
        stix = ToolMockFactory.mockOne('test-tool');
        expect(stix).toBeDefined();
        expect(stix.id).toBeDefined();
        expect(stix.type).toBeDefined();
        expect(stix.type).toEqual(StixCoreType.TOOL);
    });

});

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

/**
 * STIX vulnerability
 */
describe('Vulnerability STIX model', () => {

    let stix: Vulnerability;

    afterEach(() => {
        console.log('vulnerability', stix.toJson());
    });

    it('should have a constructor', () => {
        stix = VulnerabilityMockFactory.mockOne('test-vulnerability');
        expect(stix).toBeDefined();
        expect(stix.id).toBeDefined();
        expect(stix.type).toBeDefined();
        expect(stix.type).toEqual(StixCoreType.VULNERABILITY);
    });

});
