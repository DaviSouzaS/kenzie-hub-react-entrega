import styled from "styled-components";

export const StyledDahsboard = styled.div`
    background-color: var(--grey-4);

    height: 100vh;

    .user-infos {
        width: 100%;
        height: 118px;
        border-top: 1px solid var(--grey-3);
        border-bottom: 1px solid var(--grey-3);
    }

    .user-infos-box {
        width: 100%;
    }

    .user-infos-box > h1 {
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-1);
        color: var(--grey-0);
    }

    .user-infos-box > p {
        font-weight: var(--font-weight-2);
        font-size: var(--font-size-4);
        color: var(--grey-1);
    }

    .waring-1 {
        margin-top: 37px;
        margin-bottom: 23px;
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-1);
        color: var(--grey-0);
    }

    .waring-2 {
        font-weight: var(--font-weight-4);
        font-size: var(--font-size-2);
        color: var(--white);
    }

    .tech-list-bg {
        background-color: var(--grey-3);
        height: 416px;
        border-radius: var(--radius-1);
    }

    .tech-list-bg > ul {
        list-style: none;
        width: 100%;
        padding-top: 23px;
        padding-bottom: 23px;
        max-height: 360px;
        overflow-y: scroll;
    }

    .tech-list-bg > ul::-webkit-scrollbar {
    width: 9px;               
    }
  
    tech-list-bg > ul::-webkit-scrollbar-track {
    background: transparent;        
    }
  
    .tech-list-bg > ul::-webkit-scrollbar-thumb {
    background-color:var(--grey-4);  
    border-radius: var(--radius-1);
    }
`