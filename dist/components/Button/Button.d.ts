import React from "react";
declare type Props = React.ComponentProps<typeof StyledButton>;
declare const Button: React.FC<Props>;
declare const StyledButton: import("@stitches/react/types/styled-component").StyledComponent<"button", {
    mode?: "outline" | "primary" | "secondary" | undefined;
}, {
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
}>>;
export default Button;
