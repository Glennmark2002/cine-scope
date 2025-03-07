import Card from "./Card";

async function TopRated() {

  const API_KEY = process.env.API_KEY;
  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);
  const data = await res.json();
  const results = data.results;

  return (
    <div className='flex justify-center items-center'>
      <div className='carousel w-full px-2 '>
        {results.map((result : any) => <Card key={result.id} result={result} />  )}
      </div>
    </div>
  );
}

export default TopRated;
