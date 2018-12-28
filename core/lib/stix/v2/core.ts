import * as uuid from 'uuid';

import { Mock } from '../../common/mock';

/****************************************************************************************************************************************************/

const UNFETTER_UUID = uuid.v5('Unfetter', '6ba7b812-9dad-11d1-80b4-00c04fd430c8' /* RFC4122 OID Namespace */);

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

/**
 * @description STIX 2.0 Core Granular Marking definition
 * @see http://docs.oasis-open.org/cti/stix/v2.0/cs01/part1-stix-core/stix-v2.0-cs01-part1-stix-core.html#_Toc496709289
 */
export class GranularMarking {

    constructor(
        public readonly marking_ref: string,
        public readonly selectors: string[],
    ) {
    }

}

/**
 * @description STIX 2.0 Core External Reference definition
 */
export class ExternalReference {

    constructor(
        public readonly source_name: string,
        public readonly description?: string,
        public readonly external_id?: string,
        public readonly url?: string,
        public readonly hashes?: any,
    ) {
    }

}

export interface Relationship {
    relationship_type: string;
    source_ref: string;
    target_ref: string;
    description?: string;
}

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

/**
 * @description core stix 2.0 entity types
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
export class StixCoreType {

    public static readonly ATTACK_PATTERN = new StixCoreType('attack-pattern');

    public static readonly CAMPAIGN = new StixCoreType('campaign');

    public static readonly COURSE_OF_ACTION = new StixCoreType('course-of-action');

    public static readonly IDENTITY = new StixCoreType('identity');

    public static readonly INDICATOR = new StixCoreType('indicator');

    public static readonly INTRUSION_SET = new StixCoreType('intrusion-set');

    public static readonly MALWARE = new StixCoreType('malware');

    public static readonly MARKING_DEFINITION = new StixCoreType('marking-definition');

    public static readonly OBSERVED_DATA = new StixCoreType('observed-data');

    public static readonly REPORT = new StixCoreType('report');

    public static readonly SIGHTING = new StixCoreType('sighting');

    public static readonly THREAT_ACTOR = new StixCoreType('threat-actor');

    public static readonly TOOL = new StixCoreType('tool');

    public static readonly VULNERABILITY = new StixCoreType('vulnerability');

    protected static readonly UNKNOWN = new StixCoreType('unknown');

    public static from(type: string | StixCoreType): StixCoreType {
        if (typeof type === 'string') {
            const match = Object.entries(StixCoreType)
                .filter(([key, value]) => key !== 'from')
                .find(([key, value]) => (key === type) || (value.value === type));
            if (match) {
                return StixCoreType[match[0]];
            }
            return StixCoreType.UNKNOWN;
        }
        return type;
    }

    protected constructor(
        private value: string,
    ) {
    }

    public toString() {
        return this.value;
    }

    public toJSON() {
        return this.value;
    }

}

// Other enums listed as restrictive-string types instead
export type ATTACK_MOTIVATION = 'accidental' | 'coercion' | 'dominance' | 'ideology' | 'notoriety'
    | 'organizational-gain' | 'personal-gain' | 'personal-satisfaction' | 'revenge' | 'unpredictable';

export type ATTACK_RESOURCE_LEVEL = 'individual' | 'club' | 'contest' | 'team' | 'organization' | 'government';

export type HASHING_ALGORITHM = 'MD5' | 'MD6' | 'RIPEMD-160' | 'SHA-1' | 'SHA-224' | 'SHA-256' | 'SHA-384'
    | 'SHA-512' | 'SHA3-224' | 'SHA3-256' | 'SHA3-384' | 'SHA3-512' | 'SSDEEP' | 'WHIRLPOOL';

export type IDENTITY_CLASS = 'individual' | 'group' | 'organization' | 'class' | 'unknown';

export type INDICATOR_LABEL = 'anomalous-activity' | 'anonymization' | 'benign' | 'compromised'
    | 'malicious-activity' | 'attribution';

export type INDUSTRY_SECTOR = 'agriculture' | 'aerospace' | 'automotive' | 'communications' | 'construction'
    | 'defence' | 'education' | 'energy' | 'entertainment' | 'financial-services' | 'government-national'
    | 'government-regional' | 'government-local' | 'government-public-services' | 'healthcare'
    | 'hospitality-leisure' | 'infrastructure' | 'insurance' | 'manufacturing' | 'mining' | 'non-profit'
    | 'pharmaceuticals' | 'retail' | 'technology' | 'telecommunications' | 'transportation' | 'utilities';

export type MALWARE_LABEL = 'adware' | 'backdoor' | 'bot' | 'ddos' | 'dropper' | 'exploit-kit' | 'keylogger'
    | 'ransomware' | 'remote-access-trojan' | 'resource-exploitation' | 'rogue-security-software'
    | 'rootkit' | 'screen-capture' | 'spyware' | 'trojan' | 'virus' | 'worm';

export type REPORT_LABEL = 'threat-report' | 'attack-pattern' | 'campaign' | 'identity' | 'indicator'
    | 'malware' | 'observed-data' | 'threat-actor' | 'tool' | 'vulnerability';

export type THREAT_ACTOR_LABEL = 'activist' | 'competitor' | 'crime-syndicate' | 'criminal' | 'hacker'
    | 'insider-accidental' | 'insider-disgruntled' | 'nation-state' | 'sensationalist' | 'spy' | 'terrorist';

export type THREAT_ACTOR_ROLE = 'agent' | 'director' | 'independent' | 'infrastructure-architect'
    | 'infrastructure-operator' | 'malware-author' | 'sponsor';

export type THREAT_ACTOR_SOPHISTICATION = 'none' | 'minimal' | 'intermediate' | 'advanced' | 'expert'
    | 'innovator' | 'strategic';

export type TOOL_LABEL = 'denial-of-service' | 'exploitation' | 'information-gathering' | 'network-capture'
    | 'credential-exploitation' | 'remote-access' | 'vulnerability-scanning';

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

/**
 * Splits a STIX identifier into constituent parts.
 */
export class StixIdentifier {

    constructor(
        protected _type: StixCoreType,
        protected _hash: string,
    ) {
    }

    /**
     * @returns the STIX identifier as a single string
     */
    get id(): string { return `${this._type}--${this._hash}`; }
    public toString = () => this.id;
    public toJSON = () => this.id;

    /**
     * Generates a STIX identifier from a given ID string.
     */
    public static build(id: string | null | undefined): StixIdentifier | undefined {
        if (id) {
            const parts = id.split('--', 2);
            if (parts.length > 1) {
                return new StixIdentifier(StixCoreType.from(parts[0]), parts[1]);
            }
        }
        return undefined;
    }

    /**
     * Generates an Unfetter-created STIX identifier using a consistent hashing method. In other words, if the same type and unique name are given,
     * regardless of the system you are running on, you should get back the same generated STIX identifier.
     * 
     * So, for example, if two different Unfetter deployments ingest the same report from the same source, both deployed systems should generate the
     * same STIX identifier. If those two systems then synchronize their data, they should recognize they both possess the same report, and will not
     * overwrite each others' data.
     */
    public static generate(type: StixCoreType | string, unique_name: string): StixIdentifier {
        return new StixIdentifier(StixCoreType.from(type), uuid.v5(unique_name, UNFETTER_UUID));
    }

}

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

/**
 * @description base stix 2.0 object
 * @see https://stixproject.github.io/
 * @see https://oasis-open.github.io/cti-documentation/
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
export abstract class StixDomainObject {

    protected _type!: StixCoreType;
    protected _id?: StixIdentifier;

    public name!: string;
    public version: number = 2.0;
    public created_by_ref?: string;
    public created: Date = new Date();
    public modified: Date;
    public revoked: boolean = false;
    public description!: string;
    public labels: string[] = [];
    public object_marking_refs: string[] = [];
    public granular_markings: GranularMarking[] = [];
    public external_references: ExternalReference[] = [];

    constructor(
        data?: any,
    ) {
        Object.assign(this, data);
        if (!data || !data.modified) {
            this.modified = this.created;
        }
    }

    get id(): string | null | undefined {
        if (this._id && this._id.id) {
            return this._id.id;
        }
        return null;
    }
    set id(id: string | null | undefined) { this.setId(id); }
    public setId(id: StixIdentifier | string | null | undefined) {
        if (id) {
            if (typeof id === 'string') {
                this._id = StixIdentifier.build(id);
            } else {
                this._id = id;
            }
        } else {
            this._id = undefined;
        }
    }
    public generateId(fromId: string) {
        this._id = StixIdentifier.generate(this.type, fromId);
    }

    get type(): StixCoreType { return this._type; }
    set type(type: StixCoreType) { this.setType(type); }
    public setType(type: string | StixCoreType) { this._type = StixCoreType.from(type); }

    /**
     * @description generate json from this object
     * @return {string}
     */
    public toJson(pretty: boolean = false) {
        const delim = pretty ? '\t' : '';
        return JSON.stringify(this, this.jsonProperties(), delim);
    }
    protected getCoreProperties() {
        return ['type', 'version', 'id', 'name'];
    }
    protected jsonProperties(): string[] {
        const keys = Object.keys(this).filter((key) => (key !== '_type') && (key !== '_id'));
        return Array.from(new Set([...this.getCoreProperties()].concat(keys)));
    }
    public toString = () => this.toJson();

}

/****************************************************************************************************************************************************/

/****************************************************************************************************************************************************/

export class MockStix extends StixDomainObject {

    constructor(
        data?: any,
    ) {
        super({ type: 'mock', ...data });
    }

}

export class StixCoreMock extends Mock<StixDomainObject> {

    public mockOne(data?: any): StixDomainObject {
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

export const StixCoreMockFactory = new StixCoreMock();

export class GranularMarkingMock extends Mock<GranularMarking> {

    public mockOne(name: string = 'marking'): GranularMarking {
        const marking = StixIdentifier.generate(StixCoreType.MARKING_DEFINITION, name);
        return new GranularMarking(marking.id, ['description', 'labels']);
    }

}

export const GranularMarkingMockFactory = new GranularMarkingMock();
