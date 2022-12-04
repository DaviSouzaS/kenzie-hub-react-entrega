import { createGlobalStyle } from "styled-components";

export const StyledButtons = createGlobalStyle`

    .form-login {
        width: 90%;
    }

    .form-login > button{
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
    }

    .form-login > button:hover {
        transition-duration: 0.3s;
        background-color: var(--color-primary-focus);
    }

    .form-login .loading-icon {
        animation: loadingIcon 2s;
    }

    @keyframes loadingIcon {
    to {
        transform: rotate(2turn);
    }
    }

    .to-register-button {
        width: 90%;
        height: 48px;
        background-color: var(--grey-1);
        color: var(--grey-0);
        text-decoration: none;
        border: none;
        border-radius: var(--radius-1);
        font-weight: var(--font-weight-4);
        font-size: var(--font-size-2);
    }

    .to-register-button:hover {
        transition-duration: 0.3s;
        background-color: var(--grey-2);
    }

    .show-pass-button {
        border: none;
        background-color: transparent;
    }

    .show-pass-button > img {
        cursor: pointer;
        width: 14px;
        height: 22px;
    }
`
