import React, { Component } from "react";
import { CssChild } from "../styled-components";

class CssGridChild extends Component {
    render() {
        //on click we want to add a new code editor for that specific child
        // onClick={() => console.log(this.props.children)}
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
