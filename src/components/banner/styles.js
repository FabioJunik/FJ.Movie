import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 60rem;
    
    font-size: 1.6rem;
    overflow:hidden;


    background-image: url(${(props=> props.src)});
    background-size: cover;
    background-position: center;
`;

export const LineVertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #282a36 5%, transparent 95%);
`

export const LineHorizontal= styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #282a36 10%, transparent 90%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5rem;
    padding-bottom: 100px;
    padding-top: 70px;    

    p{
        max-width: 50rem;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const Title = styled.h1  `
    max-width: 50rem;
    margin-bottom:1rem;
`;


export const ViewMoreButton = styled.button`
    width: 12rem;
    height: 4rem;

    margin-top: 2rem;

    color: #282a36;
    font-size: 1.5rem;
    font-weight: bold;

    border-radius: .4rem;
    border: none;
    
    cursor: pointer;
    transition: all .2s;

    &:hover{
        filter:brightness(0.9);
    }
`;


