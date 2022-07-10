import Head from 'next/head';
import { useState } from 'react';

import { MovieCard } from '../../components/movieCard';
import { Container, MovieList,SearchContainer, Title } from './styles';

export default function Buscar({text=''}) {

    const [searchText, setSearchText] = useState(text);
    const [movieList, setMovieList] = useState([]);

    const handleSearch = async () => {
        if(searchText !== ''){
            const results = await fetch(`http://localhost:3000/api/search?q=${searchText}`);
            const json = await results.json();

            console.log(json);
            setMovieList(json.list);
        }
      }

      if(text !== ''){
        handleSearch();
        text='';
      }     
  return (
    <Container >
      <Head>
        <title>FJ.Movie</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Title> Perquisar por filmes</Title>

      <SearchContainer>
        <input type='text' value={searchText} onChange={e=>{setSearchText(e.target.value)}}/>   
        <button onClick={handleSearch}>Buscar</button>
      </SearchContainer>
        
        <MovieList>
            {movieList.map(item => {
              if(!item.poster_path) return
              return <li key={item.id}>
                <MovieCard 
                  id ={item.id}
                  title ={item.title}
                  poster_path ={item.poster_path}
                  original_title ={item.original_title}
                />
              </li>
            })}
            
        </MovieList>
      
    </Container>
  )
}
