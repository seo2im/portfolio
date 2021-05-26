    import styled from 'styled-components'

export const Back = styled.div<{ postId: number, width: number, height: number }>`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;

    background: ${({ theme, postId }) => theme.postit[postId].backColor};

    transform-origin: ${({ theme, postId }) => theme.postit[postId].backOrigin};
    transform: rotate(${({ theme, postId }) => theme.postit[postId].backDegree}deg) \
               translate(${({ theme, postId }) => theme.postit[postId].position});
    box-shadow: ${({ theme, postId }) => theme.postit[postId].backShadow};
`
export const Post = styled.div<{ postId: number, width: number, height: number  }>`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;

    color: black;

    box-shadow: ${({ theme, postId }) => theme.postit[postId].postShadow};

    background: ${({ theme, postId }) => theme.postit[postId].postColor};
    
    transform-origin: ${({ theme, postId }) => theme.postit[postId].postOrigin};
    transform: rotate(${({ theme, postId }) => theme.postit[postId].postDegree}deg);
`
export const ContentWrapper = styled.div<{ postId: number }>`
    padding: 2rem 2rem 2rem 2rem;

    transform-origin: 0px 0px;
    transform: rotate(${({ theme, postId }) => theme.postit[postId].contentDegree}deg);
`
