import React, { Component } from "react";
import { CssChild } from "../styled-components";

class CssGridChild extends Component {
    render() {
        const evaluate = this.props.children === this.props.nthChild;
        return (
            <CssChild
                childStyle={this.props.sheet}
                singleStyle={evaluate ? this.props.singleChild : null}
            >
                {this.props.children}
            </CssChild>
        );
    }
}

export default CssGridChild;
