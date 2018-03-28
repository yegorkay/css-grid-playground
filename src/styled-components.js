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
        color: hsl(0, 0%, 13%);
        text-align: center;
    }
`;

export const StyledHeader = styled.header`
    padding: 16px;
    margin-bottom: 48px;
    border-bottom: 4px solid #5f65af;
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
    border-radius: 5px;
`;

export const CssCodeContainer = styled.code`
    padding: 16px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: block;
    font-size: 16px;
    color: hsl(0, 0%, 13%);
    background: white;

    p {
        margin: 0 0 2px 0;
    }

    a {
        color: rgba(45, 49, 66, 0.8);
        text-decoration: none;
        float: right;
        margin: 14px 0 0 0;
        font-family: "Montserrat", sans-serif;

        &:hover {
            text-decoration: underline;
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
        color: #fa7459;
        &:first-child {
            color: #5f65af;
        }
    }

    input {
        color: #fa7459;
        background: none;
        font-family: monospace;
        text-decoration: underline;
        font-size: 16px;
        border: none;
        padding: 2px 4px;
        border-radius: 3px;

        &:focus {
            outline: none;
        }
    }

    input[type="radio"] {
        margin: 0 8px;
        vertical-align: middle;
    }

    input[type="radio"] + label {
        cursor: pointer;
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
        color: #5f65af;
        border-bottom: 1px solid #5f65af;

        &:focus {
            outline: none;
        }
    }
`;

export const CssChild = styled.div`
    background: #98dfaf;
    display: grid;
    border-radius: 5px;
    user-select: none;
    ${props => props.childStyle};
    ${props => props.singleStyle};
`;

export const CssGridContainer = styled.div`
    background: #f9f9f9;
    border-radius: 5px;
    padding: 16px;
    ${props => props.gridStyle};
`;
