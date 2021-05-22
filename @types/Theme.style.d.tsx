import 'styled-components'

type palette = {
    pupple: string
    yellow: string
    white: string
    black: string
}

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: palette
    }
}
