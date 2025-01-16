export type HairVariants = 'long' | 'short' | 'bald';
export type HairStyle = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | 13;

export interface HairProps {
    variant: HairVariants;
    style: HairStyle;
}