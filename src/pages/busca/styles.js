import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 10rem 5rem;

    display: flex;
    justify-items: center;
    flex-direction: column;
`;

export const MovieList = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    /* background-color: red; */
`;

export const SearchContainer = styled.div`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    /* justify-content: center; */
    gap: 2rem;

    input{
        width: 50rem;
        height: 3.5rem;

        padding: 0.5rem 2rem;
        border: none;
        outline: none;
        border-radius: .5rem;
        font-size: 1.5rem;

    }

    button{
        width: 10rem;
        font-weight: bold;

        background-color: #eee;
        border: none;
        border-radius: 0.5rem;

        cursor: pointer;
    }
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    color: #eee;
    position: relative;
    margin: 0 1rem;

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