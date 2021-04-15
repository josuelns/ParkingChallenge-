import styled from 'styled-components'

export const StyledForm = styled.form`
    & {
        height: auto;
        margin: 0 8px;
        padding: 36px 16px 64px 16px;
        background: #fff;
        display: flex;
        flex-direction: column;
    }

    label{
        margin-bottom: 7px;
        font-size: 16px;
    }

    input {
        background: #FFFBE6;
        border: 1px solid #CCCCCC;
        box-sizing: border-box;
        border-radius: 4px;
        height: 67px;
        text-align: center;

        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 33px;
        /* identical to box height */

        text-align: center;

        color: #9B9B9B;
    }

    button {
        margin-top: 16px;
        height: 67px;
        border-radius: 4px;
        border: 1px solid #CCCCCC;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        text-align: center;
        text-transform: uppercase;
        color: #9B9B9B;
    }

    .bg_gray {
        background: #DADADA;
    }

    .bg_white {
        background: #fff;
    }

    a {
        margin-top: 24px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        text-align: center;
        text-transform: uppercase;
        color: #00BCD4;
    }

`


