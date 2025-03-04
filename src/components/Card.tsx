import Link from 'next/link';

function Card({ result } : Props ) {

  // console.log(result)

  return (
    <div className='card bg-base-100'>
      <figure>
        <img src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}/>
      </figure>
      <div className='card-body'>
        <h2 className='card-title'> {result.title || result.name} </h2>
        <p> {result.first_air_date || result.release_date} </p>
      </div>
    </div>
  );
}

interface Props {
  result:{
    poster_path: string,
    name : string,
    title : string,
    release_date : string,
    first_air_date: string
  }
}

export default Card;