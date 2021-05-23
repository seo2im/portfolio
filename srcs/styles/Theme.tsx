import { DefaultTheme } from 'styled-components'

const PostItOne = {
    position: '0, 0',
    backColor: '#c0f2a1',
    backOrigin: '0px 0px',
    backShadow: '1px 1px 10px black',
    backDegree: -3,
    postColor: '#ffed82',
    postOrigin: '50px 200px',
    postShadow: '5px 5px 20px black',
    postDegree: 2.5,
    contentDegree: 0.5,
}
const PostItTwo = {
    position: '20px, 20px',
    backColor: '#d7d3d1',
    backOrigin: '0px 0px',
    backShadow: '1px 1px 10px black',
    backDegree: 5,
    postColor: '#adeef1',
    postOrigin: '50px 50px',
    postShadow: '5px 5px 20px black',
    postDegree: -7,
    contentDegree: 1,
}
const PostItThree = {
    position: '0px, 0px',
    backColor: '#ffed82',
    backOrigin: '30px 0px',
    backShadow: '1px 1px 10px black',
    backDegree: 3,
    postColor: '#f6c0be',
    postOrigin: '50px 50px',
    postShadow: '5px 5px 20px black',
    postDegree: -4.5,
    contentDegree: 1,
}
const PostItFour = {
    position: '10px, 15px',
    backColor: '#adeef1',
    backOrigin: '30px 0px',
    backShadow: '1px 1px 10px black',
    backDegree: 1,
    postColor: '#d1c0ed',
    postOrigin: '200px 400px',
    postShadow: '5px 5px 20px black',
    postDegree: 1.5,
    contentDegree: -1.2,
}
const PostItFive = {
    position: '-15px, 30px',
    backColor: '#ffcfb0',
    backOrigin: '30px 0px',
    backShadow: '1px 1px 10px black',
    backDegree: 3,
    postColor: '#c0f2a1',
    postOrigin: '50px 50px',
    postShadow: '5px 5px 20px black',
    postDegree: -4.5,
    contentDegree: 1,
}

export const Theme: DefaultTheme = {
    palette: {
        lightBlue: '#0B04D9',
        blue: '#0903A6',
        deepBlue: '#080C59',
        sky: '#6C7DD9',
        bright: '#F2F2F2',
        white: 'white',
        black: 'black',
    },

    postitColor: {
        yellow: '#ffed82',
        sky: '#adeef1',
        red: '#f6c0be',
        pupple: '#d1c0ed',
        orrange: '#ffcfb0',
        gray: '#d7d3d1',
        green: '#c0f2a1',
    },

    postit: [PostItOne, PostItTwo, PostItThree, PostItFour, PostItFive]
}

export default Theme
