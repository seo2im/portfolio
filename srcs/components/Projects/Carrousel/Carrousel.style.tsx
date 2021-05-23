import styled from 'styled-components'

export const Layout = styled.div<{ width: number}>`
    width: ${({ width }) => width}px;
    height: 80vh;

    overflow: hidden;

    position: relative;    
`
export const Slide = styled.div<{ width: number, num: number, idx: number, duration: number }>`
    display: flex;

    width: ${({ width, num }) => (width) * num}px;
    height: 100%;

    transition: transform ${({ duration }) => duration}ms ease-out;
    transform: translate(${({ width, idx }) => -idx * width}px, 0);
`
export const Content = styled.div<{ width: number }>`
    width: ${({ width }) => width}px;
    height: 90%;
    
    margin: auto;
    padding: 1rem;
    

`
export const Arrow = styled.button<{ position: string }>`
    position: absolute;
    top: calc(50% - 2.5rem);

    ${({ position }) => position}: 0;

    background-color: transparent;
    border: none;

    color: black;
    font-size: 5rem;
    
    cursor: pointer;
    
    z-index: 99;
    
    transition: opacity 0.5s;
    opacity: 0;
    &:hover {
        opacity: 1;
    }
    &:focus {
        outline: none;
    }
`