import {
    StixCoreType,
    StixIdentifier,
    StixDomainObject,
} from './core';
import { Mock } from '../../common/mock';

export class Campaign extends StixDomainObject {

    public aliases: string[] = [];
    public first_seen?: number;
    public last_seen?: number;
    public objective?: string;

    constructor(
        data?: any
    ) {
        super({ type: StixCoreType.CAMPAIGN, ...data });
    }

}

export class CampaignMock extends Mock<Campaign> {

    public mockOne(name: string = 'pass-the-hash'): Campaign {
        const id = StixIdentifier.generate(StixCoreType.CAMPAIGN, name);
        return new Campaign({ id, name });
    }

}

export const CampaignMockFactory = new CampaignMock();
