import styled from 'styled-components'

export const Layout = styled.div`
    display: flex;

    padding: 10px;

    border-radius: 1rem;

    box-shadow: 0px 0px 10px black;
    
    margin-right: 1rem;

    transition: transform 0.5s;
    &:hover {
        transform: translate(0, -10px);
    }

    background: white;
    color: black;
`
export const Logo = styled.img`
    width: 50px;
    height: 50px;
`
export const Text = styled.div`
    font-size: 20px;
    
    margin: auto;
`
