import React, { Component } from "react";
import CssGridChild from "./CssGridChild";
import { CssGridContainer } from "../styled-components";

class CssGrid extends Component {
    render() {
        // console.log(this.props.childSheet);
        let defaultGrid = {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(64px, 1fr))",
            gridTemplateRows: "auto",
            gridGap: "8px",
            gridAutoColumns: "1fr"
        };

        defaultGrid[this.props.cssValue] =
            this.props.cssInputValue ||
            "some sort of selected prop for the children";

        return (
            <CssGridContainer
                style={
                    this.props.defaultSheet
                        ? this.props.defaultSheet
                        : defaultGrid
                }
            >
                {React.Children.map(this.props.children, (child, i) => (
                    <CssGridChild key={i} sheet={this.props.childSheet}>
                        {i + 1}
                    </CssGridChild>
                ))}
            </CssGridContainer>
        );
    }
}

export default CssGrid;
