import React, { Component } from "react";
import CssProperty from "./CssProperty";
import { MainColumn } from "../styled-components";

class Column extends Component {
    render() {
        return (
            <MainColumn>
                <h2>{`${this.props.name} Properties`}</h2>
                {this.props.cssProp.map(css => (
                    <CssProperty
                        key={css.property}
                        cssValue={css}
                        cssSelector={this.props.name}
                    />
                ))}
            </MainColumn>
        );
    }
}

export default Column;
