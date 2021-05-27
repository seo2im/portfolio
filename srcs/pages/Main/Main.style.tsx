import styled from 'styled-components'

/*
    Layout of This Page
*/
export const Layout = styled.div`
    position: relative;
    color: white;
`
export const Section = styled.div`
    position: absolute;
    top: 50px;
    left: 50px;

    height: 870px;
    width: 1477px;
`
export const Nav = styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    justify-content: space-around;
    
    font-size: 1.5rem;

    margin-top: 1rem;
`
export const Bottom = styled.div`
    display: flex;
`
export const NavItem = styled.div<{ isSelect: boolean }>`
    text-decoration ${({ isSelect }) => isSelect ? 'underline' : 'none'};
`
export const BottomLeft = styled.div`
    height: 75vh;
    width: 900px;

    margin-top: 5rem;
`
export const BottomRight = styled.div`
    
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
