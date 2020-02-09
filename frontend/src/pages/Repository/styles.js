import styled from 'styled-components';

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 120px;
        border-radius: 50%;
        margin-top: 20px;
    }

    a {
        color: #2196f3;
        font-size: 16px;
        text-decoration: none;
    }

    h1 {
        font-size: 24px;
        margin-top: 10px;
    }

    p {
        margin-top: 5px;
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        text-align: center;
        max-width: 400px;
    }
`;
export const Loading = styled.strong`
    color: #fefefe;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    img {
        width: 120px;
        border-radius: 50%;
    }
`;

export const Filter = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    padding: 20px;
    justify-content: space-around;
    width: 100%;
    margin-top: 30px;

    li {
        button {
            border: none;
            color: #333;
            cursor: pointer;
            background: none;
            font-size: 16px;
            font-weight: 600;
            padding: 10px 30px;

            &:hover {
                color: #2196f3;
            }
        }
    }
`;

export const IssuesList = styled.ul`
    padding-top: 30px;

    border-top: 1px solid #ddd;
    list-style: none;

    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #ddd;
        border-radius: 4px;

        & + li {
            margin-top: 10px;
        }
    }

    img {
        height: 36px;
        width: 36px;
        border-radius: 4px;
        border: 2px solid #ddd;
    }

    div {
        flex: 1;
        margin-left: 15px;
    }

    strong {
        font-size: 16px;

        a {
            text-decoration: none;
            color: #333;
            cursor: pointer;

            &:hover {
                color: #2196f3;
            }
        }
    }

    span {
        background: #2196f3;
        color: #fefefe;
        border-radius: 2px;
        font-size: 12px;
        font-weight: bold;
        padding: 2px;
        margin-left: 10px;
    }

    p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
    }
`;

export const Controllers = styled.div`
    display: flex;
    padding: 30px;
    align-items: center;
    justify-content: center;

    button {
        margin-right: 5px;
        border: none;
        background: #2196f3;
        color: #fefefe;
        padding: 10px;
        border-radius: 4px;
        font-weight: bold;

        display: flex;
        align-items: center;
        justify-content: center;

        &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
`;
