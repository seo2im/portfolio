import styled from 'styled-components'

export const Layout = styled.div<{ width: number }>`
    width: 90%;
    height: 80vh;
    
    margin-top: 3rem;
    
    overflow: hidden;

    position: relative;
`
export const Slide = styled.div<{ width: number, num: number, idx: number, duration: number }>`
    display: flex;

    width: ${({ width, num }) => width * num}rem;
    height: 100%;

    transition: transform ${({ duration }) => duration}ms ease-out;
    transform: translate(${({ width, idx }) => -idx * width}rem, 0);
`
export const Content = styled.div<{ width: number }>`
    width: ${({ width }) => width}rem;
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

    color: ${({ position }) => position === 'right' ? 'black' : 'white'};
    font-size: 5rem;
    
    cursor: pointer;
    
    z-index: 99;
    
    transition: transform 0.5s;
    &:hover {
        transform:translate(0, -5px);
    }
    &:focus {
        outline: none;
    }
`