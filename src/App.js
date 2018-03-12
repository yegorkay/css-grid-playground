import React, { Component } from "react";
import Column from "./components/Column";
import Header from "./components/Header";
import styled from "styled-components";
import { cssGrid } from "./grid-properties";

const AppStyle = styled.div`
    width: 1170px;
    margin: 0 auto;
    display: flex;
    @media (max-width: 1170px) {
        width: 100%;
    }
`;

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <AppStyle>
                    <Column name="Parent" cssProp={cssGrid.parentCSS} />
                    <Column name="Child" cssProp={cssGrid.childCSS} />
                </AppStyle>
            </React.Fragment>
        );
    }
}

export default App;
