import styled from 'styled-components'

export const Layout = styled.div`
    width: 30rem;
    height: 100%;
    
    border: 1px solid black;
`
export const Title = styled.div<{ hover: boolean }>`
    font-size: 3rem;

    margin-top: 50%;
    margin-left: 4rem;
    
    transition: transform 1s;
    transform: translate(0, ${({ hover }) => hover ? '-50' : '10'}px);
`
export const Description = styled.div<{ hover: boolean }>`
    margin-left: 4rem;

    transition: opacity 1s;
    opacity: ${({ hover }) => hover ? '1': '0'};  
`
