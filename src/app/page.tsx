import Results from "@/components/Results";
const API_KEY = process.env.API_KEY

async function Home() {

  const res = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`);
  const data = await res.json();

  return (
    <div >
      <Results results={data.results} />
      
    </div>
  );
}

export default Home;
