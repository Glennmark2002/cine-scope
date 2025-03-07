'use client'

function Card({ result } : any) {

  return (
    <div className="card card-compact bg-base-100 m-1 z-30 cursor-pointer ">
      <figure className='w-24'>
        <img key={result.id} src={`https://image.tmdb.org/t/p/original/${result.poster_path}`} className='rounded-lg'/>
      </figure>
      <div className="card-body">
        <p className='text-xs'> { result.name || result.original_title }</p>
      </div>
    </div>
  );
}

export default Card;
