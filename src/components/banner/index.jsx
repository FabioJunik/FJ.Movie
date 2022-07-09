import {Container, LineHorizontal, LineVertical, ViewMoreButton} from './styles';
import Link from 'next/link';


export const Banner = ()=> {
    return (
        <Container>
            <LineVertical>
                <LineHorizontal>
                    <h1>Nome do filme</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus cum natus aperiam sequi 
                        sint consequuntur adipisci ullam quidem doloremque aut animi enim, 
                        vel eaque, veritatis tempora. Nisi illum numquam reiciendis.
                    </p>
                    <Link href='/'>
                        <ViewMoreButton>Ver mais</ViewMoreButton>
                    </Link>
                </LineHorizontal>
            </LineVertical>
        </Container>

    )
}