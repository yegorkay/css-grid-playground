const parentCSS = [
    {
        property: "display",
        values: ["grid", "inlineGrid", "subGrid"]
    },
    {
        property: "gridTemplateColumns"
    },
    {
        property: "gridTemplateRows"
    },
    {
        property: "gridTemplateAreas"
    },
    {
        property: "gridTemplate",
        values: [
            "none",
            "subGrid"
            // gtr / gtc
        ]
    },
    {
        property: "gridColumnGap"
    },
    {
        property: "gridRowGap"
    },
    {
        property: "gridGap"
    },
    {
        property: "justifyItems",
        values: ["start", "end", "center", "stretch"]
    },
    {
        property: "alignItems",
        values: ["start", "end", "center", "stretch"]
    },
    {
        property: "justifyContent",
        values: [
            "start",
            "end",
            "center",
            "stretch",
            "spaceAround",
            "spaceBetween",
            "spaceEvenly"
        ]
    },
    {
        property: "gridAutoColumns"
    },
    {
        property: "gridAutoRows"
    },
    {
        property: "gridAutoFlow",
        values: ["row", "column", "rowDense", "columnDense"]
    }
    //figure out grid property
];

const childCSS = [
    {
        property: "gridColumnStart"
    },
    {
        property: "gridColumnEnd"
    },
    {
        property: "gridRowStart"
    },
    {
        property: "gridRowEnd"
    },
    {
        property: "gridColumn"
    },
    {
        property: "gridRow"
    },
    {
        property: "gridArea"
    },
    {
        property: "justifySelf",
        values: ["start", "end", "center", "stretch"]
    },
    {
        property: "alignSelf",
        values: ["start", "end", "center", "stretch"]
    }
];

export const cssGrid = {
    parentCSS,
    childCSS
};
