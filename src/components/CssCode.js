import React, { Component } from "react";
import { cssCase } from "../helpers";
import {
    CssCodeContainer,
    CodeEditor,
    ChildSelector,
    ChildName
} from "../styled-components";

class CssCode extends Component {
    state = {
        selected: this.props.cssGrid.values
            ? this.props.cssGrid.values[0]
            : null
    };

    radioHandler = e => {
        this.setState({
            selected: e.target.value
        });
    };

    handleMatch = (state, value) => {
        if (state === value) {
            return true;
        }
        return false;
    };

    render() {
        const vals = this.props.cssGrid.values;
        const title = `${this.props.cssSelector.toLowerCase()}`;
        const input = (
            <input
                type="text"
                placeholder="some value here"
                onChange={this.props.textChange}
                value={this.props.cssInputValue}
                onKeyDown={e => (e.keyCode === 186 ? e.preventDefault() : null)}
            />
        );
        const gridProperty = cssCase(this.props.cssGrid.property);
        const uniqueId = `-${this.props.cssSelector}-${cssCase(
            this.props.cssGrid.property
        )}`.toLowerCase();

        const mdn = "https://developer.mozilla.org/en-US/docs/Web/CSS/";

        const mdnLink = (
            <React.Fragment>
                <a
                    target="_blank"
                    href={mdn + cssCase(this.props.cssGrid.property)}
                >
                    {`// ${gridProperty} docs →`}
                </a>
                <div />
            </React.Fragment>
        );

        return (
            <CssCodeContainer>
                {this.props.cssSelector === "Parent" ? (
                    <p>{`.${title}-container {`}</p>
                ) : (
                    <ChildSelector>
                        <ChildName>
                            <p>{`.nth-${title}`}</p>
                            <input
                                value={this.props.nthChild}
                                onChange={this.props.childHandler}
                                pattern="\d*"
                                maxLength="2"
                            />
                            <p>{"{"}</p>
                        </ChildName>
                    </ChildSelector>
                )}

                <CodeEditor>
                    <label>{`${gridProperty}:`}</label>
                    {vals
                        ? vals.map((val, i) => (
                              <React.Fragment key={`${title}-${val}`}>
                                  <input
                                      type="radio"
                                      id={`${val}${uniqueId}`}
                                      name={gridProperty}
                                      checked={this.handleMatch(
                                          this.state.selected,
                                          val
                                      )}
                                      value={val}
                                      onChange={this.radioHandler}
                                      onClick={
                                          this.props.cssSelector === "Parent"
                                              ? () =>
                                                    this.props.handleCSS(
                                                        this.props.cssGrid
                                                            .property,
                                                        val
                                                    )
                                              : () =>
                                                    this.props.handleChild(
                                                        this.props.cssGrid
                                                            .property,
                                                        val
                                                    )
                                      }
                                  />
                                  <label htmlFor={`${val}${uniqueId}`}>
                                      {cssCase(val)}
                                  </label>
                              </React.Fragment>
                          ))
                        : input}
                </CodeEditor>
                <p>{"}"}</p>
                {mdnLink}
            </CssCodeContainer>
        );
    }
}

export default CssCode;
