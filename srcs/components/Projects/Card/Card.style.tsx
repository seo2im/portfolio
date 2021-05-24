import styled from 'styled-components'

export const Layout = styled.div`
    width: 30rem;
    height: 100%;
    
    margin: auto;
    
    border: 1px solid black;
`
export const Expand = styled.div`

`
export const Title = styled.div<{ hover: boolean, isMove: boolean }>`
    font-size: 3rem;

    margin-left: 1rem;
    
    transition: transform 1s;
    transform: translate(0, ${({ hover, isMove }) => hover && !isMove ? '-50' : '10'}px);
`
export const Description = styled.div<{ hover: boolean, isMove: boolean }>`
    margin-left: 4rem;

    transition: opacity 1s;
    opacity: ${({ hover, isMove }) => hover && !isMove ? '1': '0'};
`
