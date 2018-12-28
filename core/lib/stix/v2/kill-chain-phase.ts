import { Mock } from '../../common/mock';

/**
 * @description enumeration to store cyber threat framework, kill chain names
 * @see https://attack.mitre.org/wiki/Introduction_and_Overview
 * @see https://www.lockheedmartin.com/us/what-we-do/aerospace-defense/cyber/cyber-kill-chain.html
 * @see https://www.dni.gov/files/ODNI/documents/features/A_Common_Cyber_Threat_Framework_Overview.pdf
 */
export enum KillChainEnum {
    MITRE_ATTACK = 'mitre-attack',
    LH_CTF = 'lh-ctf',
    NTCTF = 'ntctf',
}

/**
 * @see http://docs.oasis-open.org/cti/stix/v2.0/cs01/part1-stix-core/stix-v2.0-cs01-part1-stix-core.html#_Toc496709267
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
export class KillChainPhase {

    constructor(
        public readonly kill_chain_name: string,
        public readonly phase_name: string,
    ) {
    }

}

export class KillChainPhaseMock extends Mock<KillChainPhase> {

    public mockOne(name: string = 'Exploitation'): KillChainPhase {
        return new KillChainPhase(KillChainEnum.MITRE_ATTACK, name);
    }

}

export const KillChainPhaseMockFactory = new KillChainPhaseMock();
