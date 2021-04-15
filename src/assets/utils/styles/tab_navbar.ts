import styled from 'styled-components'

export const StyledTabNavBar = styled.div`
    & {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 41px 8px 0 8px;
    }

    & a {
        display: flex;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
        height: 48px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        /* identical to box height */
        text-align: center;
        color: #9B9B9B;
        width: 100%;
    }

    & a.active {
        background: #FFFFFF;
        border-radius: 4px 4px 0px 0px;
        border-bottom: 3px solid #4DD0E1;
        color: #4DD0E1;
    }

`