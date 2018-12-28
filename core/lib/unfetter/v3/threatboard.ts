import {
    StixType,
    StixObject,
} from './stix';
import { StixIdentifier } from '../../stix/v2';
import { Dictionary } from '../../common/dictionary';
import { Metadata } from './meta';
import { Mock } from '../../common/mock';

/**
 * @description
 */
export class Article extends StixObject {

    public content: string;
    public sources?: string[];

    constructor(
        data?: any
    ) {
        super({ _type: StixType.ARTICLE, ...data});
    }

}

/****************************************************************************************************************************************************/

/**
 * @description unfetter data model for the threat dashboard
 */
export class ThreatBoard extends StixObject {

    public boundaries: {
        start_date: Date | string;
        end_date: Date | string;
        targets: string[]; // plain strings
        malware: string[]; // reference ids to malware definitions
        intrusion_sets: string[]; // reference ids to intrusion set definitions
    };
    public article: string; // reference id to an article
    public reports: string[]; // reference ids to reports

    constructor(
        data?: any
    ) {
        super({ _type: StixType.THREATBOARD, ...data });
    }

}

export class ThreatBoardMock extends Mock<ThreatBoard> {

    public mockOne(name: string | any = 'My Threat Board') {
        const id = StixIdentifier.generate(StixType.ATTACK_PATTERN, name);
        const tmp = new ThreatBoard({
            _id: id,
            name,
            description: 'For testing purposes',
            reports: [
                'report--36974637-3258-4041-b70c-74693f0cfdb',
            ],
            boundaries: {
                start_date: '2018-09-13T13:52:21.862Z',
                end_date: '2018-09-13T13:52:21.862Z',
                intrusion_sets: [
                    'intrusion-set--16974637-3258-4041-b70c-74693f0cfdb5',
                ],
                malware: [
                    'malware--26974637-3258-4041-b70c-74693f0cfdb',
                ],
                targets: [
                    'Wigets & Associates',
                ],
            }
        });
        return tmp;
    }
}

export const ThreatBoardMockFactory = new ThreatBoardMock();
