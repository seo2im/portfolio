import styled from 'styled-components'

export const Layout = styled.div<{ width: number }>`
    width: ${({ width }) => width}px;
    position: relative;
    top: 200px;

    overflow: hidden;
`
export const Slide = styled.div<{ width: number, num: number, idx:number, duration: number }>`
    display: flex;

    width: ${({ width, num }) => width * num}px;
    height: 70%;

    transition: transform ${({ duration }) => duration}ms ease-out;
    transform: translate(${({ width, idx }) => -idx * width}px, 0);
`
export const Content = styled.div<{ width: number }>`
    width: ${({ width }) => width - 100}px;
    height: 90%;
    
    margin: auto;
    padding: 5px;
`
export const Arrow = styled.button<{ position: string }>`
    position: absolute;
    top: 10%;
    ${({ position }) => position}: 0;

    background-color: transparent;
    border: none;

    color: white;
    font-size: 30px;
    
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
export const Paragraph = styled.div`
    font-size: 20px;
    line-height: 25px;
    word-break: keep-all;
    
    margin-bottom: 20px;
`
export const Title = styled.div`
    font-size: 35px;
    line-height: 38px;
    
    margin-bottom: 30px;
`
export const Underline = styled.span`
    text-decoration: underline;
    font-weight: 900;
`
