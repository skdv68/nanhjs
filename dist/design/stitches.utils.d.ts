declare const _default: {
    mx: (value: number | string) => {
        marginLeft: string | number;
        marginRight: string | number;
    };
    my: (value: number | string) => {
        marginTop: string | number;
        marginBottom: string | number;
    };
    px: (value: number | string) => {
        paddingLeft: string | number;
        paddingRight: string | number;
    };
    py: (value: number | string) => {
        paddingTop: string | number;
        paddingBottom: string | number;
    };
    mb: (value: number | string) => {
        marginBottom: string | number;
    };
    by: (value: number | string) => {
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
export default _default;
