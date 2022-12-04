import { createGlobalStyle } from "styled-components";

export const Displays = createGlobalStyle`

.display-flex {
    display: flex;
}

.flex-direction-column{
    flex-direction: column;
}

.justify-content-center {
    justify-content: center;
}

.align-item {
    align-items: center;
}

@media(max-width: 900px) {
    .login-mobile {
        width: 90%;
    }

    .login-box-mobile {
        margin-top: 20px;
        margin-bottom: 20px;
        width: 100%;
    }

    .login-bg-mobile {
        
        height: auto;
    }
}
`