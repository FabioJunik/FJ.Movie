import {Container, Logo, SearchBox} from './styles';
import Link from 'next/link';


export const Header = ()=> {
    return (
        <Container>
            <Link href='/'><Logo>FJ.<span>movie</span></Logo></Link>
            <SearchBox placeholder='Pesquise por filmes'/>
            
        </Container>

    )
}