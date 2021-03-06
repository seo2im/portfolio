import styled from 'styled-components'

/*
    Layout of This Page
*/
export const Layout = styled.div`
    position: relative;
    color: white;

    width: 100vw;
    height: 100vh;
`
export const Section = styled.div`
    position: absolute;
    top: 50px;
    left: 50px;

    height: 870px;
    width: 1477px;
`
export const Bottom = styled.div`
    display: flex;
`

export const BottomLeft = styled.div`
    position: relative;
    
    margin-top: 5rem;
`
export const BottomRight = styled.div`
    z-index: 100;

    padding: 30px;
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
