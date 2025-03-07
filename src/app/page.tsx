import Trending from "@/components/Trending";

async function Home() {

  const API_KEY = process.env.API_KEY;
  const res = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`);
  const data = await res.json();
  const results = data.results;

  return (
    <div className='pt-20'>
      <p className='p-4 text-xl font-bold'>Trending</p>
      <div className='flex justify-center items-center'>
        <Trending results={results} />
      </div>
    </div>
    
  );
}

export default Home;