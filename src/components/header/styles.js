import styled from "styled-components";
import {AiOutlineSearch} from 'react-icons/ai';

export const Container = styled.header`
    position: fixed;
    width: 100%;
    height: 6rem;

    padding: 0 5rem;
    border-bottom: 1px solid #1c1c1c;
    background-color:transparent;

    display: flex;
    align-items: center;
    justify-content:space-between;

    font-size: 1.6rem;
    z-index: 100;
`;

export const Logo = styled.h1`
    font-size: 3rem;
    /* width: 50%; */
    cursor: pointer;

    span{
        font-size: 2.2rem;
        color: red;
    }
`;

export const SearchBox = styled.div`
    position: relative;
    
    input{
        width: 35rem;
        height: 3.5rem;
        padding: 0.5rem 2rem;

        border: none;
        border-radius: .5rem;
        outline:none;

        background-color: #eee;
        font-size: 1.5rem;
    }
`;

export const SearchIcon = styled(AiOutlineSearch)`
    font-size: 2.5rem;
    position: absolute;

    right: 1.5rem;
    top: .5rem;

    color: #1c1c1c;
    cursor: pointer;
`;


