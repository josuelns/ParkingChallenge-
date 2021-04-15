import styled from 'styled-components'

export const ContainerPagination = styled.div`
    & {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .PaginationBody {
        display: grid;
        position: relative;
        grid-template-columns: repeat(auto-fit, 300px);
        column-gap: 20px;
        row-gap: 25px;
        justify-content: center;
        margin: 10px;
        padding: 15px 15px 100px 15px;
        border-radius: 10px;
        min-height: 80vh;
        width: 90vw;
    }

    .PaginationItemBody {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 275px;
        height: 215px;
        border-radius: 15px;
        padding: 5px;
        padding-bottom: 15px;
        color: #49AD60;
    }

    .PaginationItemBody:hover {
        border: 1px solid #49AD60;
        cursor: pointer;
    }

    .PaginationItemBodyImg {
        background: #eee;
        width: 270px;
        height: 165px;
        margin: 10px;
        border-radius: 5px;
    }

    .PaginationItemBodyContent{
        display: flex;
        margin: 5px;
        padding: 2px 5px;
        align-self: flex-end;
        font-size: 20px;
    }

    .PaginationItemBodyText{
        color: #49AD60;
    }

    .PaginationItemBodySubText{
        color: #4F6154;
    }

    .PaginationItemBodyText, .PaginationItemBodySubText{
        margin: auto 10px;
    }

    .PaginationFooterButtons{
        display: flex;
    }

    .PaginationFooterButtons li{
        background: #4fad7a;
        border-radius: 10px;
        padding: 5px 15px;
        margin: 10px;
        opacity: 0.5;
    }

    .PaginationFooterButtons li:hover{
        opacity: 1;
        cursor: pointer;
    }

    .PaginationFooterButtons li.active{
        opacity: 1;
    }
    
    .PaginationFilter {
        position: absolute;
        right: 45px;
        background: #49AD60;
        opacity: 0.7;
        padding: 20px;
        border-radius: 100%;
        z-index: 1;
    }

    .PaginationFilter:hover {
        cursor: pointer;
        opacity: 1;
    }   

    .PaginationFilter svg:hover {
        cursor: pointer;
        opacity: 1;
    } 

    .PaginationAngleUP {
        position: fixed;
        bottom: 35px;
        right: 80px;
        background: #49AD60;
        opacity: 0.7;
        padding: 20px;
        border-radius: 100%;
        z-index: 1;
    }

    .PaginationAngleUP:hover {
        cursor: pointer;
        opacity: 1;
    }
    
    .PaginationAngleUP svg:hover {
        cursor: pointer;
        opacity: 1;
    }

`