import { Star } from 'lucide-react';

function Results({ results } : any) {
  return (
    <div className=''>
      {results.map((result : any) => (
        <div key={result.id} className="card card-side bg-base-200 m-4 "> 
            <img key={result.id} src={`https://image.tmdb.org/t/p/original/${result.poster_path || result.backdrop_path || ''}`} className='w-28 rounded-lg' />
            <div className="card-body p-4">
              <h2 className="card-title text-base"> {result.title } </h2>
              <div className='h-[73px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200'>
                <p className='text-xs'>{result.overview}</p>
              </div>
              <div className='flex items-center text-sm mt-4'>
                <Star fill='currentColor' className='w-4 mr-2' />
                {(Math.round(result.vote_average * 10) / 10).toFixed(1)}
              </div> 
            </div>
        </div>
        
      ))}
    </div>
  );
}

export default Results;
