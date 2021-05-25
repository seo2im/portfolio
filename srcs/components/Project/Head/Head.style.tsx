import styled from 'styled-components'

export const Layout = styled.div`
    
`
export const Title = styled.div`
    font-size: 6rem;
    white-space: nowrap;

    margin: 5rem 0 5rem 0;
`
export const GIF_Wrapper = styled.div`
    width: 90%;
    
    display: flex;
    justify-content: space-between;
    
    margin: auto;
    margin-top: 3rem;
    padding: 2rem 2rem;

    background : black;
`
export const Description_Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Description = styled.div`
    font-size: 2rem;

    margin-left: 3rem;
`
export const GIF = styled.img<{ width?: string, height?: string}>`
    border: 1px solid black;

    ${({ width }) => width ? `width: ${width}` : ''};
    ${({ height }) => height ? `height: ${height}` : ''};
    
    margin: auto;
`