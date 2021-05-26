import styled from 'styled-components'

export const Layout = styled.div<{ color: string }>`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    background: ${({ color }) => color};;
`

export const Image = styled.img`
    padding: 5px;
    display: block;

    user-drag: none;
`
