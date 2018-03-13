import React, { Component } from "react";
import styled from "styled-components";
import { cssCase } from "../helpers";

const CssCodeContainer = styled.div`
    background: #cccccc;
    padding: 16px;
    border-radius: 5px;

    p {
        margin: 0 0 8px 0;
    }

    a {
        text-decoration: none;
        font-style: italic;
        float: right;
        margin: 8px 0 0 0;

        &:hover {
            text-decoration: underline;
        }

        & + div {
            clear: both;
        }
    }
`;

const CodeEditor = styled.div`
    margin: 0 0 8px 16px;

    label {
        margin-right: 8px;
    }

    input {
        border: none;
    }

    input[type="radio"] {
        margin: 0 8px;
        vertical-align: middle;
    }

    input[type="radio"] + label {
        cursor: pointer;
    }
`;

const ChildSelector = styled.div`
    display: flex;
    justify-content: space-between;

    button:first-child {
        margin-right: 2px;
    }
`;

class CssCode extends Component {
    render() {
        const vals = this.props.cssValue;
        const title = `${this.props.cssSelector.toLowerCase()}`;
        const input = <input type="text" placeholder=" some value here" />;
        const gridProperty = cssCase(this.props.gridProp);
        const uniqueId = `-${this.props.cssSelector}-${cssCase(
            this.props.gridProp
        )}`.toLowerCase();

        const mdnLink = (
            <React.Fragment>
                <a
                    target="_blank"
                    href={
                        `https://developer.mozilla.org/en-US/docs/Web/CSS/` +
                        cssCase(this.props.gridProp)
                    }
                >
                    {`${cssCase(this.props.gridProp)} docs →`}
                </a>
                <div />
            </React.Fragment>
        );

        return (
            <CssCodeContainer>
                {/* Render an appropriate title component */}
                {this.props.cssSelector === "Parent" ? (
                    <p>{`${title}-container {`}</p>
                ) : (
                    <ChildSelector>
                        <p>{`${title}-selector {`}</p>
                        <div className="child-selector__toggle">
                            <button>+</button>
                            <button>-</button>
                        </div>
                    </ChildSelector>
                )}

                <CodeEditor>
                    <label>{gridProperty}:</label>
                    {/* If CSS values property exists, render out inputs with labels */}
                    {vals
                        ? vals.map(x => (
                              <React.Fragment key={`${title}-${x}`}>
                                  <input
                                      type="radio"
                                      id={`${x}${uniqueId}`}
                                      name={gridProperty}
                                  />
                                  <label htmlFor={`${x}${uniqueId}`}>
                                      {cssCase(x)}
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
