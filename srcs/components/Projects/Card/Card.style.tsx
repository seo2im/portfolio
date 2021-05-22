import styled from 'styled-components'

export const Layout = styled.div`
    height: 90%;
    width: 10rem;
`
export const Title = styled.div<{ hover: boolean }>`
    font-size: 1rem;
    
    transition: transform 1s;
    transform: translate(0, ${({ hover }) => hover ? '-10' : '10'}px);
`
export const Description = styled.div<{ hover: boolean }>`
    transition: opacity 1s;
    opacity: ${({ hover }) => hover ? '1': '0'};  
`
