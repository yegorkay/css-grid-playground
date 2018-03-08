import React, { Component } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    padding: 16px;
    margin-bottom: 48px;
    border-bottom: 2px solid black;
    h1 {
        margin: 0;
        font-size: 24px;
    }
`;

class Header extends Component {
    render() {
        return (
            <StyledHeader>
                <h1>
                    CSS Grid <br /> Playground
                </h1>
            </StyledHeader>
        );
    }
}

export default Header;
