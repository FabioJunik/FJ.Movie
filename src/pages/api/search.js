import { apiBase, apiKey } from "../../lib/tmdb";

export default async (req, res) => {
  
  let q = req.query.q;

  const results = await fetch(`${apiBase}/search/movie?api_key=${apiKey}&language=pt-BR&query=${q}`);
  const json = await results.json();


  res.status(200).json({ 
    list: json.results 
  });
}
