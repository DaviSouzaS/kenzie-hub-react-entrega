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
        background-color: var(--grey-2);
        border: none;
        color: var(--grey-0);
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