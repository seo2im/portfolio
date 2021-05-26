import styled from 'styled-components'

export const Layout = styled.div<{ top: number, left: number }>`
    display: inline-block;

    position: fixed;
    top: ${({ top }) => top}px;
    left: ${({ left }) => left}px;
`
