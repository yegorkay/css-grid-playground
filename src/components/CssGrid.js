import React, { Component } from "react";
import CssGridChild from "./CssGridChild";
import { CssGridContainer } from "../styled-components";

class CssGrid extends Component {
    render() {
        return (
            <CssGridContainer gridStyle={this.props.defaultSheet}>
                {React.Children.map(this.props.children, (child, i) => (
                    <CssGridChild
                        key={i}
                        sheet={this.props.childSheet}
                        cssValue={this.props.cssValue}
                        cssSelector={this.props.cssSelector}
                        singleChild={this.props.singleChild}
                        nthChild={this.props.nthChild}
                    >
                        {i + 1}
                    </CssGridChild>
                ))}
            </CssGridContainer>
        );
    }
}

export default CssGrid;
