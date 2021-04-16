import styled from 'styled-components'

export const StyledHeaderPage = styled.div`
    & {
        display: flex;
        align-items: center;
        margin: 19px 19px 2px 19px;
    }

    p {
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 33px;
    /* identical to box height */
        color: #00BCD4;
        margin-left: 12.51px;
    }

`
export const StyledBodyPage = styled.div`
    & {
        display: flex;
        flex-direction: column;
        margin: 25px 8px 8px 8px;
        background: #fff;
        
    }

`
export const StyledListPage = styled.div`
    & {
        display: flex;
        flex-direction: column;
        margin: 25px 8px 8px 8px;
        padding: 0px 17px 17px 17px;
        background: #fff;
        
    }

    aside.plate {
        margin-bottom: 22px;
    }

    aside.status {
        margin-bottom: 25px;
    }

    aside.time {
        margin-bottom: 41px;
    }

    aside.pay {
        margin-bottom: 43px;
    }

    p.title {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        text-transform: uppercase;
        color: #9B9B9B; 
    }

    p.plate{
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 38px;
        line-height: 52px;
        color: #00BCD4;
    }

    p.subtitle {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 33px;
        color: #0A261D;
    }
`

