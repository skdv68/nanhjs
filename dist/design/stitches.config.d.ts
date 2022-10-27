/// <reference types="react" />
export declare const styled: <Type extends import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{
    mobile: "(max-width: 550px)";
    tablet: "(max-width: 1100px)";
    laptop: "(max-width: 1450px)";
}, {
    fontSizes: {
        '12px': string;
        '13px': string;
        '14px': string;
        '16px': string;
        '18px': string;
        '24px': string;
        '28px': string;
        '36px': string;
    };
    fontWeights: {
        light: number;
        normal: number;
        semiBold: number;
        bold: number;
    };
    lineHeights: unknown;
    letterSpacings: unknown;
    fonts: {
        headerFont: string;
        bodyFont: string;
    };
    space: {
        x1: string;
        x2: string;
        x3: string;
        x4: string;
        x6: string;
        x7: string;
        x8: string;
        x10: string;
        x14: string;
        x15: string;
        x20: string;
        x22: string;
        x30: string;
    };
    sizes: {
        maxBound: string;
    };
    borderWidths: unknown;
    borderRadius: {
        br: string;
    };
    navbar: {
        default: string;
    };
    colors: {
        violet1: string;
        violet2: string;
        violet3: string;
        violet4: string;
        violet5: string;
        violet6: string;
        violet7: string;
        violet8: string;
        violet9: string;
        violet10: string;
        violet11: string;
        violet12: string;
        mintA1: string;
        mintA2: string;
        mintA3: string;
        mintA4: string;
        mintA5: string;
        mintA6: string;
        mintA7: string;
        mintA8: string;
        mintA9: string;
        mintA10: string;
        mintA11: string;
        mintA12: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    mx: (value: string | number) => {
        marginLeft: string | number;
        marginRight: string | number;
    };
    my: (value: string | number) => {
        marginTop: string | number;
        marginBottom: string | number;
    };
    px: (value: string | number) => {
        paddingLeft: string | number;
        paddingRight: string | number;
    };
    py: (value: string | number) => {
        paddingTop: string | number;
        paddingBottom: string | number;
    };
    mb: (value: string | number) => {
        marginBottom: string | number;
    };
    by: (value: string | number) => {
        borderTop: string | number;
        borderBottom: string | number;
    };
    lineLimit: (value: number) => {
        display: string;
        '-webkit-box-orient': string;
        overflow: string;
        textOverflow: string;
        overflowWrap: string;
        '-webkit-line-clamp': number;
    };
    size: (value: string) => {
        width: string;
        height: string;
    };
    flexPosition: (position: string) => {
        justifyContent: string;
        alignItems: string;
    };
    solidBorder: (color: string) => {
        border: string;
    };
    clickableArea: (size: string) => {
        position: string;
        '&::after': {
            content: string;
            position: string;
            top: string;
            left: string;
            right: string;
            bottom: string;
        };
    };
}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {
    mobile: "(max-width: 550px)";
    tablet: "(max-width: 1100px)";
    laptop: "(max-width: 1450px)";
}, import("@stitches/react/types/css-util").CSS<{
    mobile: "(max-width: 550px)";
    tablet: "(max-width: 1100px)";
    laptop: "(max-width: 1450px)";
}, {
    fontSizes: {
        '12px': string;
        '13px': string;
        '14px': string;
        '16px': string;
        '18px': string;
        '24px': string;
        '28px': string;
        '36px': string;
    };
    fontWeights: {
        light: number;
        normal: number;
        semiBold: number;
        bold: number;
    };
    lineHeights: unknown;
    letterSpacings: unknown;
    fonts: {
        headerFont: string;
        bodyFont: string;
    };
    space: {
        x1: string;
        x2: string;
        x3: string;
        x4: string;
        x6: string;
        x7: string;
        x8: string;
        x10: string;
        x14: string;
        x15: string;
        x20: string;
        x22: string;
        x30: string;
    };
    sizes: {
        maxBound: string;
    };
    borderWidths: unknown;
    borderRadius: {
        br: string;
    };
    navbar: {
        default: string;
    };
    colors: {
        violet1: string;
        violet2: string;
        violet3: string;
        violet4: string;
        violet5: string;
        violet6: string;
        violet7: string;
        violet8: string;
        violet9: string;
        violet10: string;
        violet11: string;
        violet12: string;
        mintA1: string;
        mintA2: string;
        mintA3: string;
        mintA4: string;
        mintA5: string;
        mintA6: string;
        mintA7: string;
        mintA8: string;
        mintA9: string;
        mintA10: string;
        mintA11: string;
        mintA12: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    mx: (value: string | number) => {
        marginLeft: string | number;
        marginRight: string | number;
    };
    my: (value: string | number) => {
        marginTop: string | number;
        marginBottom: string | number;
    };
    px: (value: string | number) => {
        paddingLeft: string | number;
        paddingRight: string | number;
    };
    py: (value: string | number) => {
        paddingTop: string | number;
        paddingBottom: string | number;
    };
    mb: (value: string | number) => {
        marginBottom: string | number;
    };
    by: (value: string | number) => {
        borderTop: string | number;
        borderBottom: string | number;
    };
    lineLimit: (value: number) => {
        display: string;
        '-webkit-box-orient': string;
        overflow: string;
        textOverflow: string;
        overflowWrap: string;
        '-webkit-line-clamp': number;
    };
    size: (value: string) => {
        width: string;
        height: string;
    };
    flexPosition: (position: string) => {
        justifyContent: string;
        alignItems: string;
    };
    solidBorder: (color: string) => {
        border: string;
    };
    clickableArea: (size: string) => {
        position: string;
        '&::after': {
            content: string;
            position: string;
            top: string;
            left: string;
            right: string;
            bottom: string;
        };
    };
}>>, css: <Composers extends (string | import("@stitches/react/types/util").Function | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{
    mobile: "(max-width: 550px)";
    tablet: "(max-width: 1100px)";
    laptop: "(max-width: 1450px)";
}, {
    fontSizes: {
        '12px': string;
        '13px': string;
        '14px': string;
        '16px': string;
        '18px': string;
        '24px': string;
        '28px': string;
        '36px': string;
    };
    fontWeights: {
        light: number;
        normal: number;
        semiBold: number;
        bold: number;
    };
    lineHeights: unknown;
    letterSpacings: unknown;
    fonts: {
        headerFont: string;
        bodyFont: string;
    };
    space: {
        x1: string;
        x2: string;
        x3: string;
        x4: string;
        x6: string;
        x7: string;
        x8: string;
        x10: string;
        x14: string;
        x15: string;
        x20: string;
        x22: string;
        x30: string;
    };
    sizes: {
        maxBound: string;
    };
    borderWidths: unknown;
    borderRadius: {
        br: string;
    };
    navbar: {
        default: string;
    };
    colors: {
        violet1: string;
        violet2: string;
        violet3: string;
        violet4: string;
        violet5: string;
        violet6: string;
        violet7: string;
        violet8: string;
        violet9: string;
        violet10: string;
        violet11: string;
        violet12: string;
        mintA1: string;
        mintA2: string;
        mintA3: string;
        mintA4: string;
        mintA5: string;
        mintA6: string;
        mintA7: string;
        mintA8: string;
        mintA9: string;
        mintA10: string;
        mintA11: string;
        mintA12: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    mx: (value: string | number) => {
        marginLeft: string | number;
        marginRight: string | number;
    };
    my: (value: string | number) => {
        marginTop: string | number;
        marginBottom: string | number;
    };
    px: (value: string | number) => {
        paddingLeft: string | number;
        paddingRight: string | number;
    };
    py: (value: string | number) => {
        paddingTop: string | number;
        paddingBottom: string | number;
    };
    mb: (value: string | number) => {
        marginBottom: string | number;
    };
    by: (value: string | number) => {
        borderTop: string | number;
        borderBottom: string | number;
    };
    lineLimit: (value: number) => {
        display: string;
        '-webkit-box-orient': string;
        overflow: string;
        textOverflow: string;
        overflowWrap: string;
        '-webkit-line-clamp': number;
    };
    size: (value: string) => {
        width: string;
        height: string;
    };
    flexPosition: (position: string) => {
        justifyContent: string;
        alignItems: string;
    };
    solidBorder: (color: string) => {
        border: string;
    };
    clickableArea: (size: string) => {
        position: string;
        '&::after': {
            content: string;
            position: string;
            top: string;
            left: string;
            right: string;
            bottom: string;
        };
    };
}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").CssComponent<import("@stitches/react/types/styled-component").StyledComponentType<Composers>, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {
    mobile: "(max-width: 550px)";
    tablet: "(max-width: 1100px)";
    laptop: "(max-width: 1450px)";
}, CSS>, globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? import("@stitches/react/types/css").AtRule.FontFace | import("@stitches/react/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/react/types/css-util").CSS<{
        mobile: "(max-width: 550px)";
        tablet: "(max-width: 1100px)";
        laptop: "(max-width: 1450px)";
    }, {
        fontSizes: {
            '12px': string;
            '13px': string;
            '14px': string;
            '16px': string;
            '18px': string;
            '24px': string;
            '28px': string;
            '36px': string;
        };
        fontWeights: {
            light: number;
            normal: number;
            semiBold: number;
            bold: number;
        };
        lineHeights: unknown;
        letterSpacings: unknown;
        fonts: {
            headerFont: string;
            bodyFont: string;
        };
        space: {
            x1: string;
            x2: string;
            x3: string;
            x4: string;
            x6: string;
            x7: string;
            x8: string;
            x10: string;
            x14: string;
            x15: string;
            x20: string;
            x22: string;
            x30: string;
        };
        sizes: {
            maxBound: string;
        };
        borderWidths: unknown;
        borderRadius: {
            br: string;
        };
        navbar: {
            default: string;
        };
        colors: {
            violet1: string;
            violet2: string;
            violet3: string;
            violet4: string;
            violet5: string;
            violet6: string;
            violet7: string;
            violet8: string;
            violet9: string;
            violet10: string;
            violet11: string;
            violet12: string;
            mintA1: string;
            mintA2: string;
            mintA3: string;
            mintA4: string;
            mintA5: string;
            mintA6: string;
            mintA7: string;
            mintA8: string;
            mintA9: string;
            mintA10: string;
            mintA11: string;
            mintA12: string;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        mx: (value: string | number) => {
            marginLeft: string | number;
            marginRight: string | number;
        };
        my: (value: string | number) => {
            marginTop: string | number;
            marginBottom: string | number;
        };
        px: (value: string | number) => {
            paddingLeft: string | number;
            paddingRight: string | number;
        };
        py: (value: string | number) => {
            paddingTop: string | number;
            paddingBottom: string | number;
        };
        mb: (value: string | number) => {
            marginBottom: string | number;
        };
        by: (value: string | number) => {
            borderTop: string | number;
            borderBottom: string | number;
        };
        lineLimit: (value: number) => {
            display: string;
            '-webkit-box-orient': string;
            overflow: string;
            textOverflow: string;
            overflowWrap: string;
            '-webkit-line-clamp': number;
        };
        size: (value: string) => {
            width: string;
            height: string;
        };
        flexPosition: (position: string) => {
            justifyContent: string;
            alignItems: string;
        };
        solidBorder: (color: string) => {
            border: string;
        };
        clickableArea: (size: string) => {
            position: string;
            '&::after': {
                content: string;
                position: string;
                top: string;
                left: string;
                right: string;
                bottom: string;
            };
        };
    }>;
} : K extends `@property ${string}` ? import("@stitches/react/types/css").AtRule.Property : import("@stitches/react/types/css-util").CSS<{
    mobile: "(max-width: 550px)";
    tablet: "(max-width: 1100px)";
    laptop: "(max-width: 1450px)";
}, {
    fontSizes: {
        '12px': string;
        '13px': string;
        '14px': string;
        '16px': string;
        '18px': string;
        '24px': string;
        '28px': string;
        '36px': string;
    };
    fontWeights: {
        light: number;
        normal: number;
        semiBold: number;
        bold: number;
    };
    lineHeights: unknown;
    letterSpacings: unknown;
    fonts: {
        headerFont: string;
        bodyFont: string;
    };
    space: {
        x1: string;
        x2: string;
        x3: string;
        x4: string;
        x6: string;
        x7: string;
        x8: string;
        x10: string;
        x14: string;
        x15: string;
        x20: string;
        x22: string;
        x30: string;
    };
    sizes: {
        maxBound: string;
    };
    borderWidths: unknown;
    borderRadius: {
        br: string;
    };
    navbar: {
        default: string;
    };
    colors: {
        violet1: string;
        violet2: string;
        violet3: string;
        violet4: string;
        violet5: string;
        violet6: string;
        violet7: string;
        violet8: string;
        violet9: string;
        violet10: string;
        violet11: string;
        violet12: string;
        mintA1: string;
        mintA2: string;
        mintA3: string;
        mintA4: string;
        mintA5: string;
        mintA6: string;
        mintA7: string;
        mintA8: string;
        mintA9: string;
        mintA10: string;
        mintA11: string;
        mintA12: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    mx: (value: string | number) => {
        marginLeft: string | number;
        marginRight: string | number;
    };
    my: (value: string | number) => {
        marginTop: string | number;
        marginBottom: string | number;
    };
    px: (value: string | number) => {
        paddingLeft: string | number;
        paddingRight: string | number;
    };
    py: (value: string | number) => {
        paddingTop: string | number;
        paddingBottom: string | number;
    };
    mb: (value: string | number) => {
        marginBottom: string | number;
    };
    by: (value: string | number) => {
        borderTop: string | number;
        borderBottom: string | number;
    };
    lineLimit: (value: number) => {
        display: string;
        '-webkit-box-orient': string;
        overflow: string;
        textOverflow: string;
        overflowWrap: string;
        '-webkit-line-clamp': number;
    };
    size: (value: string) => {
        width: string;
        height: string;
    };
    flexPosition: (position: string) => {
        justifyContent: string;
        alignItems: string;
    };
    solidBorder: (color: string) => {
        border: string;
    };
    clickableArea: (size: string) => {
        position: string;
        '&::after': {
            content: string;
            position: string;
            top: string;
            left: string;
            right: string;
            bottom: string;
        };
    };
}>; })[]) => () => string, keyframes: (style: {
    [offset: string]: import("@stitches/react/types/css-util").CSS<{
        mobile: "(max-width: 550px)";
        tablet: "(max-width: 1100px)";
        laptop: "(max-width: 1450px)";
    }, {
        fontSizes: {
            '12px': string;
            '13px': string;
            '14px': string;
            '16px': string;
            '18px': string;
            '24px': string;
            '28px': string;
            '36px': string;
        };
        fontWeights: {
            light: number;
            normal: number;
            semiBold: number;
            bold: number;
        };
        lineHeights: unknown;
        letterSpacings: unknown;
        fonts: {
            headerFont: string;
            bodyFont: string;
        };
        space: {
            x1: string;
            x2: string;
            x3: string;
            x4: string;
            x6: string;
            x7: string;
            x8: string;
            x10: string;
            x14: string;
            x15: string;
            x20: string;
            x22: string;
            x30: string;
        };
        sizes: {
            maxBound: string;
        };
        borderWidths: unknown;
        borderRadius: {
            br: string;
        };
        navbar: {
            default: string;
        };
        colors: {
            violet1: string;
            violet2: string;
            violet3: string;
            violet4: string;
            violet5: string;
            violet6: string;
            violet7: string;
            violet8: string;
            violet9: string;
            violet10: string;
            violet11: string;
            violet12: string;
            mintA1: string;
            mintA2: string;
            mintA3: string;
            mintA4: string;
            mintA5: string;
            mintA6: string;
            mintA7: string;
            mintA8: string;
            mintA9: string;
            mintA10: string;
            mintA11: string;
            mintA12: string;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        mx: (value: string | number) => {
            marginLeft: string | number;
            marginRight: string | number;
        };
        my: (value: string | number) => {
            marginTop: string | number;
            marginBottom: string | number;
        };
        px: (value: string | number) => {
            paddingLeft: string | number;
            paddingRight: string | number;
        };
        py: (value: string | number) => {
            paddingTop: string | number;
            paddingBottom: string | number;
        };
        mb: (value: string | number) => {
            marginBottom: string | number;
        };
        by: (value: string | number) => {
            borderTop: string | number;
            borderBottom: string | number;
        };
        lineLimit: (value: number) => {
            display: string;
            '-webkit-box-orient': string;
            overflow: string;
            textOverflow: string;
            overflowWrap: string;
            '-webkit-line-clamp': number;
        };
        size: (value: string) => {
            width: string;
            height: string;
        };
        flexPosition: (position: string) => {
            justifyContent: string;
            alignItems: string;
        };
        solidBorder: (color: string) => {
            border: string;
        };
        clickableArea: (size: string) => {
            position: string;
            '&::after': {
                content: string;
                position: string;
                top: string;
                left: string;
                right: string;
                bottom: string;
            };
        };
    }>;
}) => {
    (): string;
    name: string;
}, getCssText: () => string, theme: string & {
    className: string;
    selector: string;
} & {
    fontSizes: {
        '12px': import("@stitches/react/types/theme").Token<"12px", string, "fontSizes", "">;
        '13px': import("@stitches/react/types/theme").Token<"13px", string, "fontSizes", "">;
        '14px': import("@stitches/react/types/theme").Token<"14px", string, "fontSizes", "">;
        '16px': import("@stitches/react/types/theme").Token<"16px", string, "fontSizes", "">;
        '18px': import("@stitches/react/types/theme").Token<"18px", string, "fontSizes", "">;
        '24px': import("@stitches/react/types/theme").Token<"24px", string, "fontSizes", "">;
        '28px': import("@stitches/react/types/theme").Token<"28px", string, "fontSizes", "">;
        '36px': import("@stitches/react/types/theme").Token<"36px", string, "fontSizes", "">;
    };
    fontWeights: {
        light: import("@stitches/react/types/theme").Token<"light", string, "fontWeights", "">;
        normal: import("@stitches/react/types/theme").Token<"normal", string, "fontWeights", "">;
        semiBold: import("@stitches/react/types/theme").Token<"semiBold", string, "fontWeights", "">;
        bold: import("@stitches/react/types/theme").Token<"bold", string, "fontWeights", "">;
    };
    lineHeights: {};
    letterSpacings: {};
    fonts: {
        headerFont: import("@stitches/react/types/theme").Token<"headerFont", string, "fonts", "">;
        bodyFont: import("@stitches/react/types/theme").Token<"bodyFont", string, "fonts", "">;
    };
    space: {
        x1: import("@stitches/react/types/theme").Token<"x1", string, "space", "">;
        x2: import("@stitches/react/types/theme").Token<"x2", string, "space", "">;
        x3: import("@stitches/react/types/theme").Token<"x3", string, "space", "">;
        x4: import("@stitches/react/types/theme").Token<"x4", string, "space", "">;
        x6: import("@stitches/react/types/theme").Token<"x6", string, "space", "">;
        x7: import("@stitches/react/types/theme").Token<"x7", string, "space", "">;
        x8: import("@stitches/react/types/theme").Token<"x8", string, "space", "">;
        x10: import("@stitches/react/types/theme").Token<"x10", string, "space", "">;
        x14: import("@stitches/react/types/theme").Token<"x14", string, "space", "">;
        x15: import("@stitches/react/types/theme").Token<"x15", string, "space", "">;
        x20: import("@stitches/react/types/theme").Token<"x20", string, "space", "">;
        x22: import("@stitches/react/types/theme").Token<"x22", string, "space", "">;
        x30: import("@stitches/react/types/theme").Token<"x30", string, "space", "">;
    };
    sizes: {
        maxBound: import("@stitches/react/types/theme").Token<"maxBound", string, "sizes", "">;
    };
    borderWidths: {};
    borderRadius: {
        br: import("@stitches/react/types/theme").Token<"br", string, "borderRadius", "">;
    };
    navbar: {
        default: import("@stitches/react/types/theme").Token<"default", string, "navbar", "">;
    };
    colors: {
        violet1: import("@stitches/react/types/theme").Token<"violet1", string, "colors", "">;
        violet2: import("@stitches/react/types/theme").Token<"violet2", string, "colors", "">;
        violet3: import("@stitches/react/types/theme").Token<"violet3", string, "colors", "">;
        violet4: import("@stitches/react/types/theme").Token<"violet4", string, "colors", "">;
        violet5: import("@stitches/react/types/theme").Token<"violet5", string, "colors", "">;
        violet6: import("@stitches/react/types/theme").Token<"violet6", string, "colors", "">;
        violet7: import("@stitches/react/types/theme").Token<"violet7", string, "colors", "">;
        violet8: import("@stitches/react/types/theme").Token<"violet8", string, "colors", "">;
        violet9: import("@stitches/react/types/theme").Token<"violet9", string, "colors", "">;
        violet10: import("@stitches/react/types/theme").Token<"violet10", string, "colors", "">;
        violet11: import("@stitches/react/types/theme").Token<"violet11", string, "colors", "">;
        violet12: import("@stitches/react/types/theme").Token<"violet12", string, "colors", "">;
        mintA1: import("@stitches/react/types/theme").Token<"mintA1", string, "colors", "">;
        mintA2: import("@stitches/react/types/theme").Token<"mintA2", string, "colors", "">;
        mintA3: import("@stitches/react/types/theme").Token<"mintA3", string, "colors", "">;
        mintA4: import("@stitches/react/types/theme").Token<"mintA4", string, "colors", "">;
        mintA5: import("@stitches/react/types/theme").Token<"mintA5", string, "colors", "">;
        mintA6: import("@stitches/react/types/theme").Token<"mintA6", string, "colors", "">;
        mintA7: import("@stitches/react/types/theme").Token<"mintA7", string, "colors", "">;
        mintA8: import("@stitches/react/types/theme").Token<"mintA8", string, "colors", "">;
        mintA9: import("@stitches/react/types/theme").Token<"mintA9", string, "colors", "">;
        mintA10: import("@stitches/react/types/theme").Token<"mintA10", string, "colors", "">;
        mintA11: import("@stitches/react/types/theme").Token<"mintA11", string, "colors", "">;
        mintA12: import("@stitches/react/types/theme").Token<"mintA12", string, "colors", "">;
    };
}, createTheme: <Argument0 extends string | ({
    fontSizes?: {
        '12px'?: string | number | boolean | undefined;
        '13px'?: string | number | boolean | undefined;
        '14px'?: string | number | boolean | undefined;
        '16px'?: string | number | boolean | undefined;
        '18px'?: string | number | boolean | undefined;
        '24px'?: string | number | boolean | undefined;
        '28px'?: string | number | boolean | undefined;
        '36px'?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {
        light?: string | number | boolean | undefined;
        normal?: string | number | boolean | undefined;
        semiBold?: string | number | boolean | undefined;
        bold?: string | number | boolean | undefined;
    } | undefined;
    lineHeights?: {} | undefined;
    letterSpacings?: {} | undefined;
    fonts?: {
        headerFont?: string | number | boolean | undefined;
        bodyFont?: string | number | boolean | undefined;
    } | undefined;
    space?: {
        x1?: string | number | boolean | undefined;
        x2?: string | number | boolean | undefined;
        x3?: string | number | boolean | undefined;
        x4?: string | number | boolean | undefined;
        x6?: string | number | boolean | undefined;
        x7?: string | number | boolean | undefined;
        x8?: string | number | boolean | undefined;
        x10?: string | number | boolean | undefined;
        x14?: string | number | boolean | undefined;
        x15?: string | number | boolean | undefined;
        x20?: string | number | boolean | undefined;
        x22?: string | number | boolean | undefined;
        x30?: string | number | boolean | undefined;
    } | undefined;
    sizes?: {
        maxBound?: string | number | boolean | undefined;
    } | undefined;
    borderWidths?: {} | undefined;
    borderRadius?: {
        br?: string | number | boolean | undefined;
    } | undefined;
    navbar?: {
        default?: string | number | boolean | undefined;
    } | undefined;
    colors?: {
        violet1?: string | number | boolean | undefined;
        violet2?: string | number | boolean | undefined;
        violet3?: string | number | boolean | undefined;
        violet4?: string | number | boolean | undefined;
        violet5?: string | number | boolean | undefined;
        violet6?: string | number | boolean | undefined;
        violet7?: string | number | boolean | undefined;
        violet8?: string | number | boolean | undefined;
        violet9?: string | number | boolean | undefined;
        violet10?: string | number | boolean | undefined;
        violet11?: string | number | boolean | undefined;
        violet12?: string | number | boolean | undefined;
        mintA1?: string | number | boolean | undefined;
        mintA2?: string | number | boolean | undefined;
        mintA3?: string | number | boolean | undefined;
        mintA4?: string | number | boolean | undefined;
        mintA5?: string | number | boolean | undefined;
        mintA6?: string | number | boolean | undefined;
        mintA7?: string | number | boolean | undefined;
        mintA8?: string | number | boolean | undefined;
        mintA9?: string | number | boolean | undefined;
        mintA10?: string | number | boolean | undefined;
        mintA11?: string | number | boolean | undefined;
        mintA12?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
}), Argument1 extends string | ({
    fontSizes?: {
        '12px'?: string | number | boolean | undefined;
        '13px'?: string | number | boolean | undefined;
        '14px'?: string | number | boolean | undefined;
        '16px'?: string | number | boolean | undefined;
        '18px'?: string | number | boolean | undefined;
        '24px'?: string | number | boolean | undefined;
        '28px'?: string | number | boolean | undefined;
        '36px'?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {
        light?: string | number | boolean | undefined;
        normal?: string | number | boolean | undefined;
        semiBold?: string | number | boolean | undefined;
        bold?: string | number | boolean | undefined;
    } | undefined;
    lineHeights?: {} | undefined;
    letterSpacings?: {} | undefined;
    fonts?: {
        headerFont?: string | number | boolean | undefined;
        bodyFont?: string | number | boolean | undefined;
    } | undefined;
    space?: {
        x1?: string | number | boolean | undefined;
        x2?: string | number | boolean | undefined;
        x3?: string | number | boolean | undefined;
        x4?: string | number | boolean | undefined;
        x6?: string | number | boolean | undefined;
        x7?: string | number | boolean | undefined;
        x8?: string | number | boolean | undefined;
        x10?: string | number | boolean | undefined;
        x14?: string | number | boolean | undefined;
        x15?: string | number | boolean | undefined;
        x20?: string | number | boolean | undefined;
        x22?: string | number | boolean | undefined;
        x30?: string | number | boolean | undefined;
    } | undefined;
    sizes?: {
        maxBound?: string | number | boolean | undefined;
    } | undefined;
    borderWidths?: {} | undefined;
    borderRadius?: {
        br?: string | number | boolean | undefined;
    } | undefined;
    navbar?: {
        default?: string | number | boolean | undefined;
    } | undefined;
    colors?: {
        violet1?: string | number | boolean | undefined;
        violet2?: string | number | boolean | undefined;
        violet3?: string | number | boolean | undefined;
        violet4?: string | number | boolean | undefined;
        violet5?: string | number | boolean | undefined;
        violet6?: string | number | boolean | undefined;
        violet7?: string | number | boolean | undefined;
        violet8?: string | number | boolean | undefined;
        violet9?: string | number | boolean | undefined;
        violet10?: string | number | boolean | undefined;
        violet11?: string | number | boolean | undefined;
        violet12?: string | number | boolean | undefined;
        mintA1?: string | number | boolean | undefined;
        mintA2?: string | number | boolean | undefined;
        mintA3?: string | number | boolean | undefined;
        mintA4?: string | number | boolean | undefined;
        mintA5?: string | number | boolean | undefined;
        mintA6?: string | number | boolean | undefined;
        mintA7?: string | number | boolean | undefined;
        mintA8?: string | number | boolean | undefined;
        mintA9?: string | number | boolean | undefined;
        mintA10?: string | number | boolean | undefined;
        mintA11?: string | number | boolean | undefined;
        mintA12?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
})>(nameOrScalesArg0: Argument0, nameOrScalesArg1?: Argument1 | undefined) => string & {
    className: string;
    selector: string;
} & (Argument0 extends string ? import("@stitches/react/types/stitches").ThemeTokens<Argument1, ""> : import("@stitches/react/types/stitches").ThemeTokens<Argument0, "">), config: {
    prefix: "";
    media: {
        mobile: "(max-width: 550px)";
        tablet: "(max-width: 1100px)";
        laptop: "(max-width: 1450px)";
    };
    theme: {
        fontSizes: {
            '12px': string;
            '13px': string;
            '14px': string;
            '16px': string;
            '18px': string;
            '24px': string;
            '28px': string;
            '36px': string;
        };
        fontWeights: {
            light: number;
            normal: number;
            semiBold: number;
            bold: number;
        };
        lineHeights: unknown;
        letterSpacings: unknown;
        fonts: {
            headerFont: string;
            bodyFont: string;
        };
        space: {
            x1: string;
            x2: string;
            x3: string;
            x4: string;
            x6: string;
            x7: string;
            x8: string;
            x10: string;
            x14: string;
            x15: string;
            x20: string;
            x22: string;
            x30: string;
        };
        sizes: {
            maxBound: string;
        };
        borderWidths: unknown;
        borderRadius: {
            br: string;
        };
        navbar: {
            default: string;
        };
        colors: {
            violet1: string;
            violet2: string;
            violet3: string;
            violet4: string;
            violet5: string;
            violet6: string;
            violet7: string;
            violet8: string;
            violet9: string;
            violet10: string;
            violet11: string;
            violet12: string;
            mintA1: string;
            mintA2: string;
            mintA3: string;
            mintA4: string;
            mintA5: string;
            mintA6: string;
            mintA7: string;
            mintA8: string;
            mintA9: string;
            mintA10: string;
            mintA11: string;
            mintA12: string;
        };
    };
    themeMap: import("@stitches/react/types/config").DefaultThemeMap;
    utils: {
        mx: (value: string | number) => {
            marginLeft: string | number;
            marginRight: string | number;
        };
        my: (value: string | number) => {
            marginTop: string | number;
            marginBottom: string | number;
        };
        px: (value: string | number) => {
            paddingLeft: string | number;
            paddingRight: string | number;
        };
        py: (value: string | number) => {
            paddingTop: string | number;
            paddingBottom: string | number;
        };
        mb: (value: string | number) => {
            marginBottom: string | number;
        };
        by: (value: string | number) => {
            borderTop: string | number;
            borderBottom: string | number;
        };
        lineLimit: (value: number) => {
            display: string;
            '-webkit-box-orient': string;
            overflow: string;
            textOverflow: string;
            overflowWrap: string;
            '-webkit-line-clamp': number;
        };
        size: (value: string) => {
            width: string;
            height: string;
        };
        flexPosition: (position: string) => {
            justifyContent: string;
            alignItems: string;
        };
        solidBorder: (color: string) => {
            border: string;
        };
        clickableArea: (size: string) => {
            position: string;
            '&::after': {
                content: string;
                position: string;
                top: string;
                left: string;
                right: string;
                bottom: string;
            };
        };
    };
};
export declare const darkTheme: string & {
    className: string;
    selector: string;
} & import("@stitches/react/types/stitches").ThemeTokens<{
    colors: {};
}, "">;
export declare const globalStyle: () => string;
