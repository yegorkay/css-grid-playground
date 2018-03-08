import React, { Component } from "react";
import Column from "./components/Column";
import Header from "./components/Header";
import styled from "styled-components";

const AppStyle = styled.div`
    width: 1170px;
    margin: 0 auto;
    display: flex;
`;

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <AppStyle>
                    <Column name="Parent" />
                    <Column name="Child" />
                </AppStyle>
            </React.Fragment>
        );
    }
}

export default App;
