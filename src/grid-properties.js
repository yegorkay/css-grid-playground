const basicChild = {
    // background: "CornflowerBlue",
    color: "white",
    padding: "16px 0",
    display: "flex",
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
            gridAutoColumns: "1fr"
        },
        gridChildCSS: basicChild
    },
    {
        property: "gridTemplateRows",
        defaultValue: "3em 6em 9em 12em",
        defaultCSS: {
            display: "grid",
            gridTemplateColumns: "100px 50px 1fr",
            gridGap: "8px"
        },
        gridChildCSS: basicChild
    },
    // {
    //     property: "gridTemplateAreas",
    //     defaultValue: "b b a b b c b b c"
    // },
    // {
    //     property: "gridTemplate",
    //     defaultValue: '"b b a" auto "b b c" 2ch "b b c" 1em / 20% 20px 1fr'
    // },
    {
        property: "gridColumnGap",
        defaultValue: "5em",
        defaultCSS: {
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)"
        },
        gridChildCSS: basicChild
    },
    {
        property: "gridRowGap",
        defaultValue: "5ch",
        defaultCSS: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)"
        },
        gridChildCSS: basicChild
    },
    {
        property: "gridGap",
        defaultValue: "1em",
        defaultCSS: {
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)"
        },
        gridChildCSS: basicChild
    },
    {
        property: "justifyItems",
        values: ["start", "end", "center", "stretch"],
        defaultCSS: {
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gridGap: "8px 8px",
            gridAutoRows: "40px"
        },
        gridChildCSS: {
            // background: "Crimson",
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
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "80px",
            gridGap: "10px"
        },
        gridChildCSS: {
            // background: "Crimson",
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
            gridTemplateColumns: "repeat(3, 5em)",
            gridAutoRows: "80px",
            gridGap: "10px"
        },
        gridChildCSS: {
            // background: "Crimson",
            color: "white",
            justifyContent: "center",
            alignItems: "center"
        }
    }
    // {
    //     property: "gridAutoColumns"
    // },
    // {
    //     property: "gridAutoRows"
    // },
    // {
    //     property: "gridAutoFlow",
    //     values: ["row", "column", "row-dense", "column-dense"]
    // }
    //figure out grid property
];

const childCSS = [
    {
        property: "gridColumnStart",
        defaultValue: "span 2",
        defaultCSS: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gridAutoRows: "80px",
            gridGap: "10px"
        },
        gridChildCSS: {
            // background: "Crimson",
            color: "white",
            justifyContent: "center",
            alignItems: "center"
        },
        singleChild: {
            background: "#5f65af"
        }
    },
    {
        property: "gridColumnEnd",
        defaultValue: "-1",
        defaultCSS: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gridAutoRows: "80px",
            gridGap: "10px"
        },
        gridChildCSS: {
            // background: "Crimson",
            color: "white",
            justifyContent: "center",
            alignItems: "center"
        },
        singleChild: {
            background: "#5f65af"
        }
    },
    {
        property: "gridRowStart",
        defaultValue: "-1",
        defaultCSS: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gridAutoRows: "80px",
            gridGap: "10px"
        },
        gridChildCSS: {
            // background: "Crimson",
            color: "white",
            justifyContent: "center",
            alignItems: "center"
        },
        singleChild: {
            background: "#5f65af"
        }
    },
    {
        property: "gridRowEnd",
        defaultValue: "-1",
        defaultCSS: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gridAutoRows: "80px",
            gridGap: "10px"
        },
        gridChildCSS: {
            // background: "Crimson",
            color: "white",
            justifyContent: "center",
            alignItems: "center"
        },
        singleChild: {
            background: "#5f65af"
        }
    },
    {
        property: "gridColumn",
        defaultValue: "2 / -1",
        defaultCSS: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gridAutoRows: "80px",
            gridGap: "10px"
        },
        gridChildCSS: {
            // background: "Crimson",
            color: "white",
            justifyContent: "center",
            alignItems: "center"
        },
        singleChild: {
            background: "#5f65af"
        }
    },
    {
        property: "gridRow",
        defaultValue: "1 / span 6",
        defaultCSS: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gridAutoRows: "80px",
            gridGap: "10px"
        },
        gridChildCSS: {
            // background: "Crimson",
            color: "white",
            justifyContent: "center",
            alignItems: "center"
        },
        singleChild: {
            background: "#5f65af"
        }
    },
    {
        property: "gridArea",
        defaultValue: "2 / 1 / 2 / 4",
        defaultCSS: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gridAutoRows: "80px",
            gridGap: "10px"
        },
        gridChildCSS: {
            // background: "Crimson",
            color: "white",
            justifyContent: "center",
            alignItems: "center"
        },
        singleChild: {
            background: "#5f65af"
        }
    },
    {
        property: "justifySelf",
        values: ["start", "end", "center", "stretch"],
        defaultCSS: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "80px",
            gridGap: "10px"
        },
        gridChildCSS: {
            // background: "Crimson",
            color: "white",
            justifyContent: "center",
            alignItems: "center"
        },
        singleChild: {
            background: "#5f65af"
        }
    },
    {
        property: "alignSelf",
        values: ["start", "end", "center", "stretch"],
        defaultCSS: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "80px",
            gridGap: "10px"
        },
        gridChildCSS: {
            // background: "Crimson",
            color: "white",
            justifyContent: "center",
            alignItems: "center"
        },
        singleChild: {
            background: "#5f65af"
        }
    }
];

export const cssGrid = {
    parentCSS,
    childCSS
};
