import styled from 'styled-components'

export const Nav = styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    justify-content: space-around;

    font-family: 'Nanum Pen Script';
    font-size: 3rem;

    margin-top: 1rem;
`

export const NavItem = styled.div<{ isSelect: boolean }>`
    position: relative;
    
    text-decoration ${({ isSelect }) => isSelect ? 'underline' : 'none'};

    cursor: pointer;
`
export const DropMenu = styled.div<{ hover: boolean }>`
    display: ${({ hover }) => hover? 'flex' : 'none'};


    position: absolute;
    top: 50px;
    right: 0;

    text-decoration 'none';
;`
export const Menu = styled.div<{ isSelect: boolean }>`
    margin: 0 10px;
    text-decoration ${({ isSelect }) => isSelect ? 'underline' : 'none'};
`