import {
        Container, LineHorizontal, 
        LineVertical, ViewMoreButton,
        Title
    } from './styles';
import Link from 'next/link';

export const Banner = ({id, title, description, poster_path })=> {
    console.log(description)
    return (
        <Container src={'https://www.themoviedb.org/t/p/original/'+poster_path}>
            <LineVertical>
                <LineHorizontal>
                    <Title>{title}</Title>
                    <p>{description}</p>
                    <Link href={`/movie/${id}`}>
                        <ViewMoreButton>Ver mais</ViewMoreButton>
                    </Link>
                </LineHorizontal>
            </LineVertical>
        </Container>

    )
}