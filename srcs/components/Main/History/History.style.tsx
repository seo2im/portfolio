import styled from 'styled-components'

export const Title = styled.div`
    font-size: 2rem;
    font-weight: 900;
    
    margin-bottom: 1.5rem;
`
export const Box = styled.div`
    border: 5px solid black;
    padding: 10px;
`
export const PastBox = styled.div`
    border: 3px solid black;
    padding: 8px;
`
export const Item = styled.div<{ bold: boolean }>`
    font-size: ${({ bold }) => bold? '1.3rem' : '1rem'};
    font-weight: ${({ bold }) => bold? '900' : '700'};
    line-height: 3rem;
`
export const PastItem = styled.div`
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 2.3rem;
    
    margin-left: 1.5rem;
`
export const Duration = styled.span`
    font-size: 1rem;
`
export const PastDuration = styled.span`
    font-size: 0.8rem;
`