import { Container, Title } from "./styles";


export const MovieCard = ({id, title,poster_path,original_title})=> {
    return(
        <Container href={`/movie/${id}`}>
            <img 
                src={`https://www.themoviedb.org/t/p/original/${poster_path}`} 
                alt={original_title}
                width='150'
            /><br/>
            <Title>{title}</Title>
        </Container>
    );
}