import React, { Component } from "react";
import styled from "styled-components";

const CssChild = styled.div`
    background: #cccccc;
    height: 50px;
    width: 50px;
    display: grid;
    justify-content: center;
    align-items: center;
`;

class CssGridChild extends Component {
    render() {
        return <CssChild>1</CssChild>;
    }
}

export default CssGridChild;
