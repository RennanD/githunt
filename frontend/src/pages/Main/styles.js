import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    background: #eee;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 30px;
    margin: 80px auto;

    h1 {
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;

        svg {
            margin-right: 10px;
        }
    }
`;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        border: 1px solid #ddd;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`
    display: flex;
    align-items: center;
    justify-content: center;

    background: #2196f3;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    ${props =>
        props.loading &&
        css`
            svg {
                animation: ${rotate} 2s linear infinite;
            }
        `}
`;

export const Error = styled.div`
    margin-top: 10px;
    text-align: center;
    color: #dc3545;
    min-width: 100%;
`;

export const List = styled.ul`
    list-style: none;
    margin-top: 30px;

    li {
        padding: 15px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & + li {
            border-top: 1px solid #ddd;
        }

        a {
            color: #2196f3;
            text-decoration: none;
        }
    }
`;
