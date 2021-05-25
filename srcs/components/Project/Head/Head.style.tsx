import styled from 'styled-components'

export const Layout = styled.div`
    
`
export const Title = styled.div`
    font-size: 6rem;
    white-space: nowrap;

    margin: 6rem 0 0 0;
`
export const GIF_Wrapper = styled.div`
    width: 90%;
    
    display: flex;
    justify-content: space-between;
    
    margin: auto;
`
export const GIF = styled.img<{ width?: string, height?: string}>`
    border: 1px solid black;

    ${({ width }) => width ? `width: ${width}` : ''};
    ${({ height }) => height ? `width: ${height}` : ''};
    
    margin: 4rem auto 0 auto;
`