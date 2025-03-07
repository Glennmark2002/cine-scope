'use client'

function Card({ result } : any) {

  return (
    <div className="card card-compact m-1 z-30 cursor-pointer ">
      <figure className='w-24'>
        <img key={result.id} src={`https://image.tmdb.org/t/p/original/${result.poster_path}`} className='rounded-xl' />
      </figure>
      <p className='text-xs mt-3 pl-2'> { result.name || result.original_title }</p>
      
    </div>
  );
}

export default Card;
