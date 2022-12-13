import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --grey-4: #121214; 
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --white: #FFFFFF;
    --sucess-color: #3FE864;
    --negative-color: #E83F5B;

    --font-size-1: 18px;
    --font-size-2: 16px;
    --font-size-3: 14px;
    --font-size-4: 12px;

    --font-weight-1: 700;
    --font-weight-2: 600;
    --font-weight-3: 500;
    --font-weight-4: 400;

    --radius-1: 4px;

    --principal-font: 'Inter', sans-serif;;
}

*{
    font-family: var(--principal-font);
    margin: 0;
    padding: 0;
}

.container {
    margin: 0 auto;
    max-width: 1100px;
}
`
