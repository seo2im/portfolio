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
type postitColor = {
    yellow: string
    sky: string
    red: string
    pupple: string
    orrange: string
    gray: string
    green: string
}
type postIt = {
    position: string
    backColor: string
    backOrigin: string
    backShadow: string
    backDegree: number
    postColor: string
    postOrigin: string
    postShadow: string
    postDegree: number
    contentDegree: number
}

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: palette
        postitColor: postitColor
        postit: postIt[]
    }
}
