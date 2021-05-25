import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Layout = styled.div<{ color: string }>`
    position: relative;

    width: 30rem;
    height: 100%;
    
    margin: auto;
    
    border: 1px solid black;

    background: ${({ color }) => color};

    overflow: hidden;
`
export const Wrapper = styled.div<{ hover: boolean, isMove: boolean }>`
    background-color: white;

    overflow: hidden;
    
    position: relative;
    left: -5rem;
    top: 5rem;
    
    width: 35rem;
    height: 35rem;
    border-radius: 17.5rem;
`
export const Img = styled.img<{ height: string, top: string, left: string }>`
    height: ${({ height }) => height};
    
    position: relative;
    top: ${({ top }) => top};
    left: ${({ left }) => left};
`
export const TextWrapper = styled.div`
    overflow: hidden;

    position: absolute;
    top: 40%;
    left: 1rem;

    height: 10rem;
    width: 80%;
`

export const Title = styled.div<{ hover: boolean, isMove: boolean }>`
    font-size: 3rem;
    word-break: none;
    
    transition: transform 1s;
    transform: translate(0, ${({ hover, isMove }) => hover && !isMove ? '-100' : '10'}px);
`
export const Description = styled.div<{ hover: boolean, isMove: boolean }>`
    position: absolute;
    top: 50%;
    left: 1rem;

    word-break: keep-all;

    transition: transform 0.5s;
    transform: translate(0, ${({ hover, isMove }) => hover && !isMove ? '10' : '100'}px);
`
export const Linker = styled(Link)`
    color: black;

    &:focus: {
        color: black;
    }
`
