import styled from "styled-components";

export const StyledModal = styled.div`

    background-color: #000000b3;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;

    .modal-tech {
    width: 95%;
    max-width: 369px;
    min-width: 300px;
    height: 380px;
    background-color: var(--grey-3);
    border-radius: var(--radius-1);
    }   

    .modal-header-box {
        width: 100%;
        height: 50px;
        background-color: var(--grey-2);
        margin-bottom: 20px;
        border-radius: var(--radius-1) var(--radius-1) 0 0;
    }

    .modal-header-box > div > p {
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-3);
        color: var(--grey-0);
    }

    .modal-header-box > div > button {
        cursor: pointer;
        background-color: transparent;
        border: none;
        font-weight: var(--font-weight-3);
        font-size: var(--font-size-2);
        color: var(--grey-1);
    }

    .modal-header-box > div > button:hover {
        transition-duration: 0.3s;
        color: var(--grey-0)
    }

    .modal-header {
        width: 95%;
    }

    .modal-form {
        width: 95%;
        height: 292px;
        background-color: var(--grey-3);
    }

    .modal-form button {
        cursor: pointer;
        width: 100%;
        height: 48px;
        background-color: var(--color-primary);
        color: var(--white);
        border: none;
        border-radius: var(--radius-1);
        margin-bottom: 34px;
        font-weight: var(--font-weight-4);
        font-size: var(--font-size-2);
        margin-top: 20px;
    }

    .modal-form button:hover {
        transition-duration: 0.3s;
        background-color: var(--color-primary-focus);
    }

    .set-status-box {
        margin-top: 20px;
    }

    .set-status-box > label {
        font-size: var(--font-size-4);
        font-weight: var(--font-weight-4);
        color: var(--grey-0);
    }

    .select-box {
        width: 100%;
        background-color: var(--grey-2);
        height: 48px;
        border-radius: var(--radius-1);
        margin-top: 20px;
    }

    .select-box:focus-within {
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