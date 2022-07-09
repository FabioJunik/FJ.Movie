import Home from '../components/home';

export default function Index({list}) {

  return (
    <Home list={list}/>
  )
}

export async function getServerSideProps(){
  const res = await fetch('http://localhost:3000/api/trending');
  const json = await res.json();

  return {
    props:{
      list: json.list
    }
  };
}