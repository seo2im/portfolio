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

    font-size: 1.5rem;
    color: ${({ select }) => select? 'blue' : 'white'};
`
export const Logo = styled.img`
    position: relative;
    top: 20px;
    left: 20px;

    width: 100px;
    height: 100px;

    border 1px solid black;
    border-radius: 50px;

    background: black;
`
