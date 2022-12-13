import { createGlobalStyle } from "styled-components";

export const Displays = createGlobalStyle`

.display-flex {
    display: flex;
}

.flex-direction-column {
    flex-direction: column;
}

.justify-content-center {
    justify-content: center;
}

.align-item {
    align-items: center;
}

.justfy-content-between {
    justify-content: space-between;
}

.gap-16 {
    gap: 16px;
}

.gap-25 {
    gap: 25px;
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

    .register-container-mobile {
        width: 90%;
    }

    .mobile-container {
        max-width: 90%;
    }
}
`