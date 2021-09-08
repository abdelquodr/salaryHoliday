import { createGlobalStyle, ThemeProvider } from 'styled-components'
require("typeface-public-sans")


export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    font-family: 'Public Sans', sans-serif;
  }
`

export const theme = {

    font :{
        fontXtraSmall: '14px',
        fontSmall: '24px',
        fontMedium: '40px',
        fontLarge: '48px',
        fontLarger: '64px'
    },
  
    color: {
        lightOrange: '#E48952',
        orange: '#FF7139',
        white: '#fff',
        lightBlue: '#1693D9',
        blue: '#214167',
        deepBlue: '#28344A',
        grey: '#1693D9',
        black: '#0E1525',
        BlackDarker: '#05101D'

    },

    body: {
        space: '0 80px'
    }

}