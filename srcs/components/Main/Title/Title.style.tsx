import styled from 'styled-components'

export const Title = styled.div<{ size: 'large' | 'middle' }>`
    font-size: ${({ size }) => size === 'large' ? '3' : '2'}rem;
    font-weight: bold;

    margin-bottom: 1rem;

    color: ${({ theme, size }) => size === 'large' ? theme.palette.blue : theme.palette.sky};
`