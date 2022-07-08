import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

import styles from '../../styles/Home.module.css'

export default function Buscar() {

    const [searchText, setSearchText] = useState('');
    const [movieList, setMovieList] = useState([]);

    const handleSearch = async () => {
        if(searchText !== ''){
            const results = await fetch(`http://localhost:3000/api/search?q=${searchText}`);
            const json = await results.json();

            console.log(json);
            setMovieList(json.list);
        }
    }
  return (
    <div className={styles.container}>
      <Head>
        <title>FJ.Movie</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Perquisar por filmes
        </h1>

        <input type='text' value={searchText} onChange={e=>{setSearchText(e.target.value)}}/>   
        <button onClick={handleSearch}>Buscar</button>

        <ul>
            {movieList.map(item => (
              <li key={item.id}>
                <a href={`/movie/${item.id}`}>
                  <img 
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} 
                    width='150'
                    alt={item.original_title}
                  /><br/>
                  <p className={styles.name}>{item.title}</p>
                </a>
              </li>
            ))}
            
        </ul>
      </main>
    </div>
  )
}
