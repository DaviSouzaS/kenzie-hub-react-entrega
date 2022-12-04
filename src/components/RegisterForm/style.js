import styled from "styled-components";

export const StyledSelect = styled.div`
    
    width: 100%;
    background-color: var(--grey-2);
    border-radius: var(--radius-1);
    margin-top: 20px;
    margin-bottom: 30px;
    cursor: pointer;

    :focus-within {
        outline: 1.22px solid var(--grey-0);
    }

    select {
        cursor: pointer;
        width: 90%;
        height: 48px;
        color: var(--grey-1);
        background-color: transparent;
        border: none;
        outline: none;
    }

`

export const StyledSelectBox = styled.div`
    label {
        font-size: var(--font-size-4);
        font-weight: var(--font-weight-4);
        color: var(--grey-0);
    }
`