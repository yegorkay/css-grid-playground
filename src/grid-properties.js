const basicChild = {
    background: "CornflowerBlue",
    color: "white",
    padding: "16px 0",
    justifyContent: "center",
    alignItems: "center"
};

const parentCSS = [
    // {
    //     property: "display",
    //     values: ["grid", "inlineGrid", "subGrid"]
    // },
    {
        property: "gridTemplateColumns",
        defaultValue: "100px 50px 1fr",
        defaultCSS: {
            display: "grid",
            gridTemplateRows: "auto",
            gridGap: "8px",
            gridAutoColumns: "1fr",
            outline: "2px solid crimson"
        },
        gridChildCSS: basicChild
    },
    {
        property: "gridTemplateRows",
        defaultValue: "1fr 150px 2fr 20em",
        defaultCSS: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "8px",
            outline: "2px solid crimson"
        },
        gridChildCSS: basicChild
    },
    {
        property: "gridTemplateAreas",
        defaultValue: "b b a b b c b b c"
    },
    {
        property: "gridTemplate",
        defaultValue: '"b b a" auto "b b c" 2ch "b b c" 1em / 20% 20px 1fr'
    },
    {
        property: "gridColumnGap",
        defaultValue: "5em",
        defaultCSS: {
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            outline: "2px solid crimson"
        },
        gridChildCSS: basicChild
    },
    {
        property: "gridRowGap",
        defaultValue: "5ch",
        defaultCSS: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            outline: "2px solid crimson"
        },
        gridChildCSS: basicChild
    },
    {
        property: "gridGap",
        defaultValue: "1em",
        defaultCSS: {
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            outline: "2px solid crimson"
        },
        gridChildCSS: basicChild
    },
    {
        property: "justifyItems",
        values: ["start", "end", "center", "stretch"],
        defaultCSS: {
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gridGap: "8px 8px",
            gridAutoRows: "40px",
            outline: "crimson solid 2px"
        },
        gridChildCSS: {
            background: "Crimson",
            color: "white",
            justifyContent: "center",
            alignItems: "center"
        }
    },
    {
        property: "alignItems",
        values: ["start", "end", "center", "stretch"],
        defaultCSS: {
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gridAutoRows: "80px",
            gridGap: "10px",
            outline: "crimson solid 2px"
        },
        gridChildCSS: {
            background: "Crimson",
            color: "white",
            justifyContent: "center",
            alignItems: "center"
        }
    },
    {
        property: "justifyContent",
        values: [
            "start",
            "end",
            "center",
            "space-around",
            "space-between",
            "space-evenly"
        ],
        defaultCSS: {
            display: "grid",
            gridTemplateColumns: "repeat(2, 5em)",
            gridAutoRows: "80px",
            gridGap: "10px",
            outline: "crimson solid 2px"
        },
        gridChildCSS: {
            background: "Crimson",
            color: "white",
            justifyContent: "center",
            alignItems: "center"
        }
    },
    {
        property: "gridAutoColumns"
    },
    {
        property: "gridAutoRows"
    },
    {
        property: "gridAutoFlow",
        values: ["row", "column", "row-dense", "column-dense"]
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
