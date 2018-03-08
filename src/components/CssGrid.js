import React, { Component } from "react";
import styled from "styled-components";
import CssGridChild from "./CssGridChild";

const CssGridContainer = styled.div`
    display: grid;
    grid-gap: 8px;
    border: 1px solid black;
    margin: 16px;
    padding: 8px;
`;

class CssGrid extends Component {
    render() {
        return (
            <CssGridContainer>
                <CssGridChild />
            </CssGridContainer>
        );
    }
}

export default CssGrid;
