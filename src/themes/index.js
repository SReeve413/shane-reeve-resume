import React from 'react'

export const themes = {
    light: {
        background: '#F5F5F5', // Material Design Grey #100
        primary:'#616161', // Material Design Grey #700
        secondary:'#9E9E9E', // Material Design Grey #500
        accent:'#039BE5' // Material Design Blue #600
    }
}

export const Theme = React.createContext(
    themes.light // default theme
)