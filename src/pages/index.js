import Home from '../components/home';
import { useRouter } from 'next/router';

export default function Index({list}) {

  const {isFallback} = useRouter();

  if(isFallback) return <p>Carregando ...</p>

  return (
    <Home list={list}/>
  )
}

export async function getStaticProps(){
  const res = await fetch('http://localhost:3000/api/trending');
  const json = await res.json();

  return {
    props:{
      list: json.list
    },
    revalidate: 60 * 60 * 24
  };
}