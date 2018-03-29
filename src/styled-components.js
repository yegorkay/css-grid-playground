import styled from "styled-components";
import { injectGlobal } from "styled-components";

injectGlobal`
    body {
        font-family: "Montserrat", sans-serif;
        background: #F0F3F7;
    }
`;

export const AppStyle = styled.div`
    width: 1170px;
    margin: 0 auto;
    padding: 160px 0 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 1170px) {
        width: 100%;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        padding: 160px 0 0 0;
    }
`;

export const MainColumn = styled.section`
    h2 {
        font-family: monospace;
        font-size: 24px;
        color: hsl(0, 0%, 13%);
        text-align: center;
    }
`;

export const StyledHeader = styled.header`
    padding: 16px;
    margin-bottom: 48px;
    border-bottom: 4px solid #905;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    h1 {
        margin: 0;
        font-size: 24px;
        color: hsl(0, 0%, 13%);
    }
`;

export const CssPropertyContainer = styled.div`
    background: white;
    margin: 32px 16px;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
    border-radius: 8px;
`;

export const CssCodeContainer = styled.code`
    padding: 16px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    display: block;
    font-size: 16px;
    color: hsl(0, 0%, 13%);
    background: white;

    p {
        margin: 0 0 2px 0;
    }

    a {
        display: inline-block;
        color: rgba(45, 49, 66, 0.8);
        text-decoration: none;
        float: right;
        margin: 14px 0 0 0;

        &:after {
            content: "";
            display: block;
            width: 0;
            height: 1px;
            background: rgba(45, 49, 66, 0.4);
            transition: width 0.25s;
        }

        &:hover:after {
            width: 100%;
        }

        & + div {
            clear: both;
        }
    }
`;

export const CodeEditor = styled.div`
    margin: 0 0 2px 16px;

    label {
        margin-right: 8px;
        color: #07a;
        &:first-child {
            color: #905;
        }
    }

    input {
        color: #07a;
        background: none;
        font-family: monospace;
        font-size: 16px;
        border: none;
        padding: 2px 4px;
        border-radius: 3px;
        text-decoration: underline;

        &:focus {
            outline: none;
        }
    }

    input[type="radio"] {
        margin: 0 8px;
        vertical-align: middle;
        display: none;
    }

    input[type="radio"]:checked + label {
        color: #990055;
        font-style: normal;
        text-decoration: underline;
    }

    input[type="radio"] + label {
        cursor: pointer;

        &:not(:last-child):after {
            content: "|";
            -webkit-text-decoration: none;
            text-decoration: none !important;
            display: inline-block;
            color: #07a;
            padding: 0 0 0 8px;
        }
    }
`;

export const ChildSelector = styled.div`
    display: flex;
    justify-content: space-between;

    button:nth-child(2) {
        margin: 0 2px;
    }
    button[disabled] {
        cursor: not-allowed;
    }
`;

export const ChildName = styled.div`
    display: -webkit-box;
    margin: 0 0 2px 0;

    p {
        margin: 0;
    }

    input {
        width: 20px;
        height: 16px;
        margin: 0 4px;
        text-align: center;
        border: none;
        color: #07a;

        &:focus {
            outline: none;
        }
    }
`;

export const CssChild = styled.div`
    background: #0077aa;
    display: grid;
    border-radius: 5px;
    user-select: none;
    font-weight: 700;
    ${props => props.childStyle};
    ${props => props.singleStyle};
`;

export const CssGridContainer = styled.div`
    background: #c1dff0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 16px;
    ${props => props.gridStyle};
`;
