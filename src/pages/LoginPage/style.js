import styled from "styled-components";

export const StyledLoginBg = styled.div`
    background-color: var(--grey-4);
    width: 100%;
    height: 100vh;

    .logo {
        margin-bottom: 36px;
    }
`

export const StyledLoginBox = styled.div`
    
    width: 369px;
    height: 520px;
    background-color: var(--grey-3);
    border-radius: var(--radius-1);

    h1 {
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-1);
        color: var(--grey-0);
        margin-bottom: 29px;
    }

    p {
        font-weight: var(--font-weight-2);
        font-size: var(--font-size-4);
        color: var(--grey-0);
        margin-bottom: 22px;
    }
`