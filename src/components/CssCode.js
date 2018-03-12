import React, { Component } from "react";
import styled from "styled-components";
import { cssCase } from "../helpers";
const CssCodeContainer = styled.div`
    background: #cccccc;
    padding: 16px;
    p {
        margin: 8px 0;
    }
    a {
        text-decoration: none;
        font-style: italic;
        &:hover {
            text-decoration: underline;
        }
    }
    div {
        margin-left: 16px;
        label {
            margin-right: 8px;
        }
        input {
            border: none;
        }
    }
`;

class CssCode extends Component {
    render() {
        const vals = this.props.cssValue;
        const input = <input type="text" placeholder=" some value here" />;
        return (
            <CssCodeContainer>
                <p>
                    {this.props.cssSelector === "Parent"
                        ? `${this.props.cssSelector.toLowerCase()}-container {`
                        : `${this.props.cssSelector.toLowerCase()}-selector {`}
                </p>
                <div>
                    <label>{cssCase(this.props.gridProp)}:</label>
                    {vals
                        ? vals.map(x => (
                              <React.Fragment
                                  key={`${
                                      this.props.cssSelector
                                  }-${x}`.toLowerCase()}
                              >
                                  <input
                                      type="radio"
                                      id={x}
                                      name={cssCase(this.props.gridProp)}
                                  />
                                  <label htmlFor={x}>{cssCase(x)}</label>
                              </React.Fragment>
                          ))
                        : input}
                </div>
                <p>{"}"}</p>
                <a
                    target="_blank"
                    href={
                        `https://developer.mozilla.org/en-US/docs/Web/CSS/` +
                        cssCase(this.props.gridProp)
                    }
                >
                    {`${cssCase(this.props.gridProp)} docs →`}
                </a>
            </CssCodeContainer>
        );
    }
}

export default CssCode;
