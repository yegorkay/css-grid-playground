import React, { Component } from "react";
import styled from "styled-components";

const CssChild = styled.div`
    background: #cccccc;
    height: 64px;
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;

class CssGridChild extends Component {
    render() {
        return <CssChild>{this.props.children}</CssChild>;
    }
}

export default CssGridChild;
