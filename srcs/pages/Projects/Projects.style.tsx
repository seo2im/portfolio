import styled from 'styled-components'

export const Layout = styled.div`
    
`
export const Canvas = styled.canvas<{ load: boolean }>`
    background: rgb(34, 39, 42);

    position: fixed;
    top: 0;
    left: 0;

    z-index: -99;

    width: 100vw;
    height: 100%;

    transform:translate(${({ load }) => load ? '-20rem, 0' : '2000px, 0'});
`