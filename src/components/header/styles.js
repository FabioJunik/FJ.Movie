import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 6rem;

    padding: 0 5rem;
    border-bottom: 1px solid #1c1c1c;
    /* background-color: #fff; */

    display: flex;
    align-items: center;
    justify-content:start;


    font-size: 1.6rem;
`;

export const Logo = styled.h1`
    font-size: 3rem;
    width: 50%;

    span{
        font-size: 2.2rem;
        color: red;
    }
`;

export const SearchBox = styled.input`
    width: 30rem;
    height: 3rem;

    padding: 0.5rem 2rem;

    border: none;
    border-radius: .5rem;
    outline:none;

    background-color: #eee;
`;

