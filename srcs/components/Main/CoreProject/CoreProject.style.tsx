import styled from 'styled-components'

export const Layout = styled.div`

`
export const Title = styled.div`
    font-size: 40px;
    font-weight: 900;
`
export const Term = styled.div`
    margin: 5px 0;
    color: grey;
`
export const Section =  styled.div`
    display: flex;
`
export const Left = styled.div`
    width: 800px;

    margin-right: 30px;
`
export const ImgWrapper = styled.div<{ background?: string }>`
    position: relative;

    display: flex;
    justify-content: space-around;
    algin-content: center;

    padding: 20px 0;
    
    background: ${({ background }) => background? background : 'white'};
`
export const Text = styled.div`
    position: absolute;
    top: 0;
    left: 30px;

    color: white;
`
export const Gif = styled.img<{ num: number}>`
    width: ${({ num }) => `calc(80% / ${num})`};
`
export const SpecWrapper = styled(ImgWrapper)`
    height: 100px;

    margin: atuo;
    margin-top: 30px;
`
export const SpecImg = styled.img<{ num: number}>`
    width: ${({ num }) => `calc(80% / ${num})`};
    object-fit: contain;
`
export const Right = styled.div`
    padding: 30px 0;
`
export const Descrition = styled.div`
    margin-bottom: 20px;

    word-break: keep-all;
`
export const ContentWrapper = styled.div`
    border-radius: 15px;

    padding: 20px 20px;

    background: grey;
`
export const Content = styled.div`
    margin: 30px 0;

    word-break: keep-all;
`
export const LinkWrapper = styled.div`
    margin-top: 30px;

    display: flex;
    justify-content: space-around;
    align-items: center;
`
