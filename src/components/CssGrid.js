import React, { Component } from "react";
import styled from "styled-components";
import CssGridChild from "./CssGridChild";

const CssGridContainer = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    margin-top: 16px;
    padding: 8px;
`;

class CssGrid extends Component {
    render() {
        const defaultGrid = {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(64px, 1fr))",
            justifyItems: "center",
            gridGap: "8px"
        };

        return (
            <CssGridContainer style={defaultGrid}>
                {React.Children.map(this.props.children, (child, i) => (
                    <CssGridChild>{i + 1}</CssGridChild>
                ))}
            </CssGridContainer>
        );
    }
}

export default CssGrid;
