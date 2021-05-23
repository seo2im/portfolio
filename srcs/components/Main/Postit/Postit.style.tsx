import styled from 'styled-components'

export const Post = styled.div`
    background: ${({ theme }) => theme.palette.sky};
`
export const Layout = styled.div`
    padding: 2rem 2rem 2rem 2rem;
    margin: 1rem 0;

    background: ${({ theme }) => theme.palette.blue};
    transform-origin: 200px 500px;
    transform: rotate(1deg);
`
