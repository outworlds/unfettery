import { Dictionary } from './dictionary';
import { Relationship } from '../stix/v2';

export type JsonApiLink = URL;

/**
 * @description generic data
 */
export interface JsonApiData<T = Dictionary, U = Dictionary<Relationship>> {
    id?: string;
    type: string;
    attributes: T;
    relationships: U;
    links: JsonApiLink;
}

export interface JsonApi<T = JsonApiData, U = JsonApiLink> {
    data: T;
    links: U;
}
