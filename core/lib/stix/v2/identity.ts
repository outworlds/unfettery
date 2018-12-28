import {
    StixCoreType,
    StixIdentifier,
    StixDomainObject,
    IDENTITY_CLASS,
    INDUSTRY_SECTOR,
} from './core';
import { Mock } from '../../common/mock';

export class Identity extends StixDomainObject {

    public identity_class!: IDENTITY_CLASS;
    public sectors: INDUSTRY_SECTOR[] = [];
    public contact_information?: string;

    constructor(
        data?: any,
    ) {
        super({ type: StixCoreType.IDENTITY, ...data });
    }

}

export class IdentityMock extends Mock<Identity> {

    public mockOne(name: string = 'pass-the-hash'): Identity {
        const id = StixIdentifier.generate(StixCoreType.IDENTITY, name);
        return new Identity({ id, name });
    }

}

export const IdentityMockFactory = new IdentityMock();
