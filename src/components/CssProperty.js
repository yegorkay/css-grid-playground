import React, { Component } from "react";
import CssCode from "./CssCode";
import CssGrid from "./CssGrid";
import styled from "styled-components";

const CssPropertyContainer = styled.div`
    padding: 6px 16px;
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
                <CssGrid />
            </CssPropertyContainer>
        );
    }
}

export default CssProperty;
