import styled from "styled-components";

export const StyledTech = styled.li`
    width: 95%;
    min-height: 49px;
    background-color: var(--grey-4);
    border-radius: var(--radius-1);
    cursor: pointer;

    :hover {
        transition-duration: 0.3s;
        background-color: var(--grey-2);
    }

    h2 {
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-3);
        color: var(--white);
        margin-left: 20px;
    }

    span {
        margin-right: 20px;
    }

    p {
        font-weight: var(--font-weight-4);
        font-size: var(--font-size-4);
        color: var(--grey-1);
    }

    button {
        cursor: pointer;
        background-color: transparent;
        border: none;
    }

    .card-body {
        min-height: 49px;
        width: 100%;
    }
`
