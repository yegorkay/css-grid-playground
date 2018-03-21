import React, { Component } from "react";
import { CssChild } from "../styled-components";

class CssGridChild extends Component {
    render() {
        //on click we want to add a new code editor for that specific child
        // onClick={() => console.log(this.props.children)}
        return (
            <CssChild style={this.props.sheet}>{this.props.children}</CssChild>
        );
    }
}

export default CssGridChild;
