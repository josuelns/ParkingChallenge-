import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    &{
        margin: 0;
        padding: 0;
        color: #9B9B9B;
    }

    @font-face {
      font-family: 'Open Sans';
      src: local('Open Sans'), url('../fonts/OpenSans-Regular.ttf') format('truetype');
    }

    body {
        background: #F2F2F2;
        margin: 0;
        padding: 0;
    }
    
    li {
        list-style: none;
    }

    a {
      text-decoration: none;
    }
  }
`