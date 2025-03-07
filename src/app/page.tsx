import TopRated from "@/components/TopRated";
import Trending from "@/components/Trending";

function Home() {

  return (
    <div className='pt-20'>
      <p className='p-4 text-xl font-bold'>Trending</p>
      <Trending  />
      <p className='p-4 text-xl font-bold'>Top Rated</p>
      <TopRated />
    </div>
    
  );
}

export default Home;