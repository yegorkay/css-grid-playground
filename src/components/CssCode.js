import React, { Component } from "react";
import styled from "styled-components";

const CssCodeContainer = styled.div`
    background: #cccccc;
    padding: 16px;
    p {
        margin: 8px 0;
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
        return (
            <CssCodeContainer>
                <p>css-parent-or-child {"{"}</p>
                <div>
                    {/* Have some condition logic if the property 
                is editable or selectable and render the 
                appropriate input */}
                    <label>some-property:</label>
                    <input type="text" />
                </div>
                <p>{"}"}</p>
            </CssCodeContainer>
        );
    }
}

export default CssCode;
