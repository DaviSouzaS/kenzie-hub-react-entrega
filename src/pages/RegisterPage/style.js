import styled from "styled-components"; 

export const StyledRegisterBg = styled.div`
    background-color: var(--grey-4);
    width: 100%;
    height: 100%;

    .logo {
        margin-bottom: 48px;
    }

    .register-header {
        width: 100%;
    }

    .register-box {
        height: 1100px;
        width: 100%;
        background-color: var(--grey-3);
        border-radius: var(--radius-1);
    }

    .register-box > h1 {
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-1);
        color: var(--grey-0);
        margin-top: 22px;
        margin-bottom: 22px;
    }

    .register-box > p {
        font-weight: var(--font-weight-4);
        font-size: var(--font-size-4);
        color: var(--grey-1);
        margin-bottom: 28px;
    }
`
export const StyledRegisterContainer = styled.div`
    width: 370px;
    margin-top: 30px;
    margin-bottom: 48px;
`