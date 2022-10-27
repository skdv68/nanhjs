export declare const reset: {
    "*, *::before, *::after": {
        boxSizing: string;
        '@media (prefers-reduced-motion: reduce)': {
            'animation-duration': string;
            'animation-iteration-count': string;
            'transition-duration': string;
            'scroll-behavior': string;
        };
    };
    '@import': string;
    '*': {
        margin: number;
        padding: number;
    };
    "html, body": {
        height: string;
        background: string;
        fontFamily: string;
        fontSize: string;
    };
    body: {
        lineHeight: number;
        '-webkit-font-smoothing': string;
    };
    "img, picture, video, canvas, svg": {
        display: string;
        maxWidth: string;
    };
    "input, button, textarea, select": {
        fontFamily: string;
        fontSize: string;
        color: string;
        fontWeight: number;
    };
    "p, h1, h2, h3, h4, h5, h6": {
        overflowWrap: string;
    };
    ul: {
        listStyleType: string;
    };
    "#root, #__next": {
        isolation: string;
    };
    a: {
        textDecoration: string;
    };
};
export declare const utilityClass: {
    '.sreen-reader-only': {
        position: string;
        width: string;
        height: string;
        padding: string;
        margin: string;
        overflow: string;
        clip: string;
        whiteSpace: string;
        border: string;
    };
};
export declare const commonStyle: {
    "input, button, textarea, select, div": {
        '&:focus-visible': {
            outline: string;
        };
    };
};
