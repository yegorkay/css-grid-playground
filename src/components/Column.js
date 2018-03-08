import React, { Component } from "react";
import styled from "styled-components";
import CssProperty from "./CssProperty";

const MainColumn = styled.section`
    width: 100%;
    h2 {
        text-align: center;
    }
`;

class Column extends Component {
    render() {
        return (
            <MainColumn>
                <h2>{`${this.props.name} Properties`}</h2>
                <CssProperty />
                <CssProperty />
            </MainColumn>
        );
    }
}

export default Column;
