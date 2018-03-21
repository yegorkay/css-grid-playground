import styled from "styled-components";

export const AppStyle = styled.div`
    width: 1170px;
    margin: 0 auto;
    padding: 200px 0 0 0;
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
        text-align: center;
    }
`;

export const StyledHeader = styled.header`
    padding: 16px;
    margin-bottom: 48px;
    border-bottom: 2px solid black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    h1 {
        margin: 0;
        font-size: 24px;
    }
`;

export const CssPropertyContainer = styled.div`
    padding: 16px;
    margin: 32px 16px;
    border: 1px solid black;
    border-radius: 5px;
`;

export const CssCodeContainer = styled.div`
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

export const CodeEditor = styled.div`
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

export const CssChild = styled.div`
    background: #cccccc;
    display: grid;
    border-radius: 5px;
    user-select: none;
    ${props => props.globalItemStyle};
`;

export const CssGridContainer = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    margin-top: 16px;
    padding: 8px;
`;
