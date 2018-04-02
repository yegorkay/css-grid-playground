import React, { Component } from "react";
import CssCode from "./CssCode";
import CssGrid from "./CssGrid";
import CssGridChild from "./CssGridChild";
import { CssPropertyContainer } from "../styled-components";

class CssProperty extends Component {
    state = {
        children: 12,
        nthChild: 1,
        childSheet: this.props.cssValue.singleChild,
        cssInputValue: this.props.cssValue.defaultValue,
        defaultSheet: this.props.cssValue.defaultCSS,
        gridChildSheet: this.props.cssValue.gridChildCSS
    };

    handleCSS = (property, value) => {
        const defaultSheet = { ...this.state.defaultSheet };
        defaultSheet[property] = value;
        this.setState({ defaultSheet });
    };

    handleChild = (property, value) => {
        const childSheet = { ...this.state.childSheet };
        childSheet[property] = value;
        this.setState({ childSheet });
    };

    changeHandler = e => {
        this.handleCSS(this.props.cssValue.property, e.target.value);
        this.handleChild(this.props.cssValue.property, e.target.value);
        this.setState({
            cssInputValue: e.target.value
        });
    };

    childValueHandler = e => {
        this.setState({
            nthChild: Number(e.target.value)
        });
    };

    componentWillMount() {
        const allCSS =
            this.state.cssInputValue ||
            (this.props.cssValue.values ? this.props.cssValue.values[0] : null);

        this.handleCSS(this.props.cssValue.property, allCSS);

        if (this.props.cssSelector === "Child") {
            this.handleChild(this.props.cssValue.property, allCSS);
        }
    }

    render() {
        const gridChildren = [];
        for (var i = 0; i < this.state.children; i++) {
            gridChildren.push(
                <CssGridChild key={this.props.cssValue.property} />
            );
        }

        return (
            <CssPropertyContainer>
                <CssCode
                    childHandler={this.childValueHandler}
                    cssGrid={this.props.cssValue}
                    cssInputValue={this.state.cssInputValue}
                    cssSelector={this.props.cssSelector}
                    defaultSheet={this.state.defaultSheet}
                    handleCSS={this.handleCSS}
                    handleChild={this.handleChild}
                    nthChild={this.state.nthChild}
                    textChange={this.changeHandler}
                />
                <CssGrid
                    childSheet={this.state.gridChildSheet}
                    cssInputValue={this.state.cssInputValue}
                    cssValue={this.props.cssValue.property}
                    cssSelector={this.props.cssSelector}
                    defaultSheet={this.state.defaultSheet}
                    nthChild={this.state.nthChild}
                    singleChild={this.state.childSheet}
                >
                    {gridChildren}
                </CssGrid>
            </CssPropertyContainer>
        );
    }
}

export default CssProperty;
