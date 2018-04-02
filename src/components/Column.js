import React, { Component } from "react";
import CssProperty from "./CssProperty";

class Column extends Component {
    render() {
        return (
            <section>
                <h2>{`${this.props.name} Properties`}</h2>
                {this.props.cssProp.map(css => (
                    <CssProperty
                        key={css.property}
                        cssValue={css}
                        cssSelector={this.props.name}
                    />
                ))}
            </section>
        );
    }
}

export default Column;
