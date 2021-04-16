import styled from 'styled-components'

export const StyledCard = styled.div`
    & {
        display: flex;
        background: #FFFFFF;
        margin: 17px;
        padding: 17px 0px 16px 15px;
        border: 1px solid #E4E3E3;
        box-sizing: border-box;
        box-shadow: 0px 2px 2px rgb(0 0 0 / 20%);
        border-radius: 8px;
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

    p.subtitle {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 33px;
        color: #0A261D;
        white-space: nowrap;
    }

    aside {
        margin-right: 63px;
    }
`


