import Head from 'next/head';
import { useRouter } from 'next/router';

import { 
        Container, Title, Content, 
        MoreInfo,Img,Filter, Star, Loading } 
from './styles';

export default function MovieItem({info}) {
  console.log(info)
  
  const {isFallback} = useRouter();

  if(isFallback)
    return <Loading> <img src={`https://64.media.tumblr.com/5bf8ba688ff3553b900a40dad2bbc1e0/tumblr_inline_pl93uu9rT41t9ij1a_1280.gifv`} alt='loading'/></Loading>

  const hour = Math.trunc(info.runtime/60);
  const minute = info.runtime%60;

  return (
    <Container >
      <Filter
        src={`https://www.themoviedb.org/t/p/original/${info.backdrop_path}`}
      />
      <Head>
        <title>{info.title} | FJ.movie</title>
      </Head>
      
      <Img
          src={`https://www.themoviedb.org/t/p/original/${info.poster_path}`}
          alt={info.original_title}      
      />

      <Content>
        <Title>{info.title}</Title>
        <MoreInfo>
          <li><b>{info.vote_average} <Star/></b></li>
          <li>{info.release_date.split('-')[0]}</li>
          <li>{`${hour}h, ${minute}m`}</li>
        </MoreInfo>
        <div>{info.overview}</div>
        <MoreInfo>
          {info.genres.map(genre => (
            <li key={genre.id}>
              {genre.name}
            </li>
          ))}
        </MoreInfo>
        </Content>
    </Container>
  )
}

export async function getStaticPaths(){
  const res = await fetch('http://localhost:3000/api/trending');
  const json = await res.json();

  const paths = json.list.map(movie => {
    return {params: {id: movie.id.toString()}}
  })

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps(context){
  const res = await fetch(`http://localhost:3000/api/movie/${context.params.id}`);
  const json = await res.json();

  return {
    props:{
      info: json.info
    },
    revalidate: 60 * 60
  };
}