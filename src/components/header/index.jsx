import {Container, Logo, SearchBox, SearchIcon} from './styles';
import Link from 'next/link';
import { useState } from 'react';

export const Header = ()=> {
    const [searchText, setSearchText] = useState('');

    return (
        <Container>
            <Link href='/'><Logo>FJ.<span>movie</span></Logo></Link>
            <SearchBox>
                <input 
                    type="text"
                    placeholder='Pesquise por filmes' 
                    value={searchText} 
                    onChange={(e)=>setSearchText(e.target.value)}
                />
                <Link href={`/busca/${searchText}`}><SearchIcon/></Link>
            </SearchBox> 
        </Container>

    )
}