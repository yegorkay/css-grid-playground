import React, { Component } from "react";
import Column from "./components/Column";
import Header from "./components/Header";
import { cssGrid } from "./grid-properties";
import { AppStyle } from "./styled-components";

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
