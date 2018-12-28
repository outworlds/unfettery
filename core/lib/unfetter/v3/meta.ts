import { Dictionary } from 'lib/common';

export interface Publishable {
    published: boolean;
}

/**
 * @description unfetter extension of stix
 */
export interface Metadata extends Dictionary<any>, Publishable {}
