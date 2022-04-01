import { FontWeightToken, ColorToken, NumberToken } from "../tokens";

export interface SyntaxHighlightStyle {
    color: ColorToken;
    weight: FontWeightToken;
}

export interface Player {
    baseColor: ColorToken;
    cursorColor: ColorToken;
    selectionColor: ColorToken;
    borderColor: ColorToken;
}

export interface BackgroundColor {
    base: ColorToken;
    hovered: ColorToken;
    active: ColorToken;
    focused: ColorToken;
}

export interface Syntax {
    primary: SyntaxHighlightStyle;
    comment: SyntaxHighlightStyle;
    punctuation: SyntaxHighlightStyle;
    constant: SyntaxHighlightStyle;
    keyword: SyntaxHighlightStyle;
    function: SyntaxHighlightStyle;
    type: SyntaxHighlightStyle;
    variant: SyntaxHighlightStyle;
    property: SyntaxHighlightStyle;
    enum: SyntaxHighlightStyle;
    operator: SyntaxHighlightStyle;
    string: SyntaxHighlightStyle;
    number: SyntaxHighlightStyle;
    boolean: SyntaxHighlightStyle;
    predictive: SyntaxHighlightStyle;
    // TODO: Either move the following or rename
    title: SyntaxHighlightStyle;
    emphasis: SyntaxHighlightStyle;
    emphasisStrong: SyntaxHighlightStyle;
    linkUrl: SyntaxHighlightStyle;
    linkText: SyntaxHighlightStyle;
    listMarker: SyntaxHighlightStyle;
};

export default interface Theme {
    name: string;
    backgroundColor: {
        100: BackgroundColor;
        300: BackgroundColor;
        500: BackgroundColor;
        ok: BackgroundColor;
        error: BackgroundColor;
        warning: BackgroundColor;
        info: BackgroundColor;
    };
    borderColor: {
        primary: ColorToken;
        secondary: ColorToken;
        muted: ColorToken;
        focused: ColorToken;
        active: ColorToken;
        ok: ColorToken;
        error: ColorToken;
        warning: ColorToken;
        info: ColorToken;
    };
    textColor: {
        primary: ColorToken;
        secondary: ColorToken;
        muted: ColorToken;
        placeholder: ColorToken;
        active: ColorToken;
        feature: ColorToken;
        ok: ColorToken;
        error: ColorToken;
        warning: ColorToken;
        info: ColorToken;
    };
    iconColor: {
        primary: ColorToken;
        secondary: ColorToken;
        muted: ColorToken;
        placeholder: ColorToken;
        active: ColorToken;
        feature: ColorToken;
        ok: ColorToken;
        error: ColorToken;
        warning: ColorToken;
        info: ColorToken;
    };
    editor: {
        background: ColorToken;
        indent_guide: ColorToken;
        indent_guide_active: ColorToken;
        line: {
            active: ColorToken;
            highlighted: ColorToken;
            inserted: ColorToken;
            deleted: ColorToken;
            modified: ColorToken;
        };
        highlight: {
            selection: ColorToken;
            occurrence: ColorToken;
            activeOccurrence: ColorToken;
            matchingBracket: ColorToken;
            match: ColorToken;
            activeMatch: ColorToken;
            related: ColorToken;
        };
        gutter: {
            primary: ColorToken;
            active: ColorToken;
        };
    };

    syntax: Syntax,

    player: {
        1: Player;
        2: Player;
        3: Player;
        4: Player;
        5: Player;
        6: Player;
        7: Player;
        8: Player;
    };
    shadowAlpha: NumberToken;
}
