import styled from "styled-components";

export const Container = styled.div`

    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */

`;

export const MovieList = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 5rem;
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    color: #eee;
    position: relative;
    margin: 0 6.5rem;
    margin-top: -5rem;

    &:after{
        content: ' ';
        position: absolute;
        width: .5rem;
        height: 2.7rem;

        left: -.7rem;
        top: .3rem;

        background-color: red;
    }
`;