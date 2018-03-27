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
        // console.log(defaultSheet);
    };

    handleChild = (property, value) => {
        const childSheet = { ...this.state.childSheet };
        childSheet[property] = value;
        this.setState({ childSheet });
        // console.log(childSheet);
    };

    changeHandler = e => {
        this.handleCSS(this.props.cssValue.property, e.target.value);
        this.handleChild(this.props.cssValue.property, e.target.value);
        this.setState({
            cssInputValue: e.target.value
        });
    };

    addChild = () => {
        if (this.state.children === 42) {
            return;
        }
        this.setState(prevState => ({
            children: prevState.children + 1
        }));
    };

    removeChild = () => {
        if (this.state.children === 1) {
            return;
        }
        this.setState(prevState => ({
            children: prevState.children - 1
        }));
    };

    resetChild = () => {
        this.setState({ children: 12 });
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
                    cssGrid={this.props.cssValue}
                    cssSelector={this.props.cssSelector}
                    defaultSheet={this.state.defaultSheet}
                    handleCSS={this.handleCSS}
                    handleChild={this.handleChild}
                    // need these props below to hold relevant default values
                    cssInputValue={this.state.cssInputValue}
                    textChange={this.changeHandler}
                    //managing child state with buttons in CssCode
                    removeChild={this.removeChild}
                    addChild={this.addChild}
                    resetChild={this.resetChild}
                    childState={this.state.children}
                    nthChild={this.state.nthChild}
                    childHandler={this.childValueHandler}
                />
                <CssGrid
                    cssInputValue={this.state.cssInputValue}
                    defaultSheet={this.state.defaultSheet}
                    bigChange={this.changeHandler}
                    cssValue={this.props.cssValue.property}
                    childSheet={this.state.gridChildSheet}
                    cssSelector={this.props.cssSelector}
                    singleChild={this.state.childSheet}
                    nthChild={this.state.nthChild}
                >
                    {gridChildren}
                </CssGrid>
            </CssPropertyContainer>
        );
    }
}

export default CssProperty;
