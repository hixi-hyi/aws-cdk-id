export interface IRank {
    empire?: string;
    kingdom?: string;
    division?: string;
    section?: string;
    legion?: string;
    cohort?: string;
    family?: string;
    tribe?: string;
    genus?: string;
    series?: string;
    species?: string;
}
export declare enum RankLoc {
    Empire = 0,
    Kingdom = 1,
    Division = 2,
    Section = 3,
    Legion = 4,
    Cohort = 5,
    Family = 6,
    Tribe = 7,
    Genus = 8,
    Series = 9,
    Species = 10
}
export interface RankLocArgs {
    start?: RankLoc;
    end?: RankLoc;
}
export declare class Rank implements IRank {
    static DEFAULT_START_LOC: RankLoc;
    empire: string;
    kingdom: string;
    division: string;
    section: string;
    legion: string;
    cohort: string;
    family: string;
    tribe: string;
    genus: string;
    series: string;
    species: string;
    constructor(r: IRank);
    private expands;
    copy(r?: IRank): this;
    private toArray;
    private toArrayWithLoc;
    getValue(loc: RankLoc): string;
    capitalizeString(start?: RankLoc, end?: RankLoc): string;
    slashString(start?: RankLoc, end?: RankLoc): string;
    dotString(start?: RankLoc, end?: RankLoc): string;
}
