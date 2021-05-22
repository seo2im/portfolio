import styled from 'styled-components'

export const Layout = styled.div`
    position: relative;

    width: 100%;
    height: 100vh;
`
export const Section = styled.div`
    margin-top: 100%;
    margin-left: 2.5rem;
`
export const Menu = styled.div<{ select: boolean }>`
    margin-top: 1rem;

    font-size: 1rem;
    color: ${({ select }) => select? 'blue' : 'black'};
`
export const Logo = styled.div`
    position: relative;
    top: 10px;
    left: 10px;

    width: 60px;
    height: 60px;

    background: black;
`
