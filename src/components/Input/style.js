import styled from "styled-components";

export const StyledInput = styled.div`
    
    .input-default {
        width: 100%;
        height: 48px;
        background-color: var(--grey-2);
        border-radius: var(--radius-1);
        margin-top: 20px;
    }

    .input-default:focus-within {
        outline: 1.22px solid var(--grey-0);
    }

    label {
        font-size: var(--font-size-4);
        font-weight: var(--font-weight-4);
        color: var(--grey-0);
    }

    input {
        width: 90%;
        background-color: transparent;
        border: none;
        color: var(--grey-0);
    }

    input:-webkit-autofill, input:-webkit-autofill:focus {
        transition: background-color 600000s 0s, color 600000s 0s;
    }

    input::placeholder {
        font-weight: var(--font-weight-4);
        font-size: var(--font-size-2);
        color: var(--grey-1);
    }

    input:focus {
        outline: none;

    }
`

export const StyledInputBox = styled.div`
    margin-bottom: 25px;

    .input-waring {
        margin-top: 5px;
        color: var(--negative-color);
        font-weight: var(--font-weight-4);
        font-size: var(--font-size-4);
    }

`