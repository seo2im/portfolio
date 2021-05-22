import styled from 'styled-components'

export const Title = styled.div<{ size: 'large' | 'middle' }>`
    font-size: ${({ size }) => size === 'large' ? '3' : '2'}rem;
    font-weight: bold;
`