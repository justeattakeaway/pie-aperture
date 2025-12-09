export interface NavigationItem {
    name: string;
    url: string;
    key: string;
    isCurrent: boolean;
}

export interface NavigationUrls {
    vanilla: string;
    nuxt: string;
    nextjsV14: string;
    nextjsV15: string;
}

export type AppName = 'vanilla' | 'nuxt' | 'nextjsV14' | 'nextjsV15' | 'unknown';

export declare function getNavigationUrls(): NavigationUrls;
export declare function getCurrentAppName(): AppName;
export declare function getNavigationData(): NavigationItem[];
