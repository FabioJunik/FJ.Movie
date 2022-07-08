import { apiBase, apiKey } from "../../lib/tmdb";

export default async (req, res) => {
  
  let q = req.query.q;

  const results = await fetch(`${apiBase}/search/movie?api_key=${apiKey}&language=pt-BR&query=${q}`);
  const json = await results.json();

  console.log(json)
  console.log(`${apiBase}/search/movie?api_key=${apiKey}&language=pt-BR&query=${q}`)

  res.status(200).json({ 
    list: json.results 
  });
}
