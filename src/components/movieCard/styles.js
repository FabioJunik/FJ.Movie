import styled from "styled-components";

export const Container = styled.a`    
    width: 15rem;
    margin: 0 1rem,;
    
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    
    transform: scale(0.9);
    transition: .2s;
    cursor: pointer;
    
    &:hover{
        transform: scale(1);
    }

`;

export const Title = styled.h2`
`;