import {
    StixCoreType,
    StixIdentifier,
    StixDomainObject,
    THREAT_ACTOR_ROLE,
    THREAT_ACTOR_SOPHISTICATION,
    ATTACK_RESOURCE_LEVEL,
    ATTACK_MOTIVATION,
} from './core';
import { Mock } from '../../common/mock';

export class ThreatActor extends StixDomainObject {

    public aliases: string[] = [];
    public roles: THREAT_ACTOR_ROLE[] = [];
    public goals: string[] = [];
    public sophistication?: THREAT_ACTOR_SOPHISTICATION;
    public resource_level?: ATTACK_RESOURCE_LEVEL;
    public primary_motivation?: ATTACK_MOTIVATION;
    public secondary_motivation?: ATTACK_MOTIVATION;
    public personal_motivations: ATTACK_MOTIVATION[] = [];

    constructor(
        data?: any,
    ) {
        super({ type: StixCoreType.THREAT_ACTOR, ...data });
    }

}

export class ThreatActorMock extends Mock<ThreatActor> {

    public mockOne(name: string = 'pass-the-hash'): ThreatActor {
        const id = StixIdentifier.generate(StixCoreType.THREAT_ACTOR, name);
        return new ThreatActor({ id, name });
    }

}

export const ThreatActorMockFactory = new ThreatActorMock();
