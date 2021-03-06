import styled from 'styled-components'

export const Layout = styled.div<{ top?: number, left?: number, width?: string, height?: string}>`
    position: fixed;
    top: ${({ top }) => top? top : 0}px;
    left: ${({ left }) => left? left : 0}px;

    background: rgb(34, 39, 42);

    width: ${({ width }) => width? width : '100%'};
    height: ${({ height }) => height? height : '100%'};;

    z-index: -99;
`
export const Back = styled.img`
    width: 100%;
    height: 100%;
`
