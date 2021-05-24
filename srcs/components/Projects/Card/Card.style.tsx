import styled from 'styled-components'

export const Layout = styled.div<{ color: string }>`
    position: relative;

    width: 30rem;
    height: 100%;
    
    margin: auto;
    
    border: 1px solid black;

    background: ${({ color }) => color};
`
export const Wrapper = styled.div<{ hover: boolean, isMove: boolean }>`
    background-color: rgba(0, 0, 0, 0.5);
    
    position: relative;
    top: ${({ hover, isMove }) => hover && !isMove ? '0' : '40%'};
    
    transition: height 1s, top 1s;
    
    height: ${({ hover, isMove }) => hover && !isMove ? '100%' : '6rem'};
`
export const Title = styled.div<{ hover: boolean, isMove: boolean }>`
    position: absolute;
    top: 40%;
    left: 1rem;

    font-size: 3rem;
    word-break: none;
    
    transition: transform 1s;
    transform: translate(0, ${({ hover, isMove }) => hover && !isMove ? '-100' : '10'}px);
`
export const Description = styled.div<{ hover: boolean, isMove: boolean }>`
    position: absolute;
    top: 50%;
    left: 1rem;

    transition: opacity 1s;
    opacity: ${({ hover, isMove }) => hover && !isMove ? '1': '0'};
`
