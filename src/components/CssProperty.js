import React, { Component } from "react";
import CssCode from "./CssCode";
import CssGrid from "./CssGrid";
import styled from "styled-components";
import CssGridChild from "./CssGridChild";

const CssPropertyContainer = styled.div`
    padding: 16px;
    margin: 32px 16px;
    border: 1px solid black;
    border-radius: 5px;
`;

class CssProperty extends Component {
    render() {
        return (
            <CssPropertyContainer>
                <CssCode
                    gridProp={this.props.cssValue.property}
                    cssSelector={this.props.cssSelector}
                    cssValue={this.props.cssValue.values}
                />
                <CssGrid>
                    <CssGridChild />
                    <CssGridChild />
                    <CssGridChild />
                    <CssGridChild />
                    <CssGridChild />
                    <CssGridChild />
                    <CssGridChild />
                    <CssGridChild />
                    <CssGridChild />
                    <CssGridChild />
                </CssGrid>
            </CssPropertyContainer>
        );
    }
}

export default CssProperty;
