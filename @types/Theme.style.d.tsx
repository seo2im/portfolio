import 'styled-components'

type palette = {
    lightBlue: string
    blue: string
    deepBlue: string
    sky: string
    bright: string
    black: string
    white: string
}
type postit = {
    yellow: string
    sky: string
    red: string
    pupple: string
    orrange: string
    gray: string
    green: string
}

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: palette
        postit: postit
    }
}
