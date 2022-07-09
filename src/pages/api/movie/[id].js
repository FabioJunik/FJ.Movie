import { apiBase, apiKey } from "../../../lib/tmdb";

export default async (req, res) => {
  
  const movieId = req.query.id;

  const results = await fetch(`${apiBase}/movie/${movieId}?api_key=${apiKey}&language=pt-BR`);
  const json = await results.json();


  res.status(200).json({ 
    info: json
  });
}
