import { apiBase, apiKey } from "../../lib/tmdb";

export default async (req, res) => {
  const results = await fetch(`${apiBase}/trending/movie/week?api_key=${apiKey}&language=pt-BR`);
  const json = await results.json();

  res.status(200).json({ 
    list: json.results 
  });
}
