import styled from 'styled-components'

/*
    Layout of This Page
*/
export const Layout = styled.div`
    position: relative;
    
    color: white;
    
    display: flex;
`
export const Left = styled.div`
    height: 75vh;
    width: 900px;

    margin-top: 5rem;
`
export const Wrapper = styled.div<{ isOut: boolean }>`
    transition: transform 0.5s;
    transform: translate(${({ isOut }) => isOut ? '1700px, 0' : '0, 0'});
`
export const BoardText = styled.div`
    position: absolute;
    top: 120px;
    left: 1250px;

    transform: rotate(30deg);
    font-size: 2rem;
`
