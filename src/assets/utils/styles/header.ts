import styled from 'styled-components'

export const StyledHeader = styled.header`
    & {
        display: flex;
        position: relative;
        justify-content: space-between;
        align-items: center;
        background: #4DD0E1;
        height: 60px;
        padding: 0 8px;
    }

    #navList {
        position: absolute;
        top: 60px;
        left: 0px;
        width: 100%;
    }

    #navList ul { 
        display: flex;
        flex-direction: column;
        height: 100vh;
        background: #4dd0e1;
        padding: 2px 15px;
    }

    #navList ul li{
        margin-top: 46px;
    }

    #navList ul li a{
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        /* identical to box height */
        
        color: #FFFFFF;
    }

`