import Image from "next/image";

async function Home() {

  const API_KEY = process.env.API_KEY;
  const res = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`);
  const data = await res.json();
  const results = data.results;
  // console.log(results[0].poster_path);

  return (
    <div className='h-screen pt-16 bg-base-200'>
      {results.map((result : any) =>  <img key={result.id} src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}/> )}
    </div>
  );
}

export default Home;