import styled from "styled-components";
import {AiFillStar} from 'react-icons/ai';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 5rem;
    position: relative;
    
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 3rem;
    
`;

export const Filter = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;

    top: 0;
    left: 0;

    background-color: red;
    background-image: url(${(props)=>props.src});
    background-size: cover;
    background-position: center;

    filter:brightness(0.2);
`;

export const Img = styled.div`
    width: 27.5rem;
    height: 40rem;

    background-image: url(${(props)=>props.src});
    background-size: cover;
    background-position: center;

    z-index: 90;
`;

export const Content = styled.div`
    height: 40rem;
    max-width: 60rem;

    display: flex;
    flex-direction: column;
    justify-items: start;
    gap: 2rem;
    flex: 1;

    font-size: 1.6rem;
    z-index: 99;
`;

export const Title = styled.h1`
    font-size: 4rem;
`;

export const MoreInfo = styled.ul`
    display: flex;
    gap: 1.5rem;
    font-size:1.7rem;
`;

export const Star = styled(AiFillStar)`
    font-size: 1.6rem;
    margin-bottom: -.2rem;
`;

export const Loading = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 110;
    img{
        width: 100%;
        height: 100%;
    }
`;