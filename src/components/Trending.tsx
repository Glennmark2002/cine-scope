import Card from "./Card";

function Trending({results} : any) {
  return (
    <div className='carousel w-full px-2 '>
      {results.map((result : any) => <Card key={result.id} result={result} />  )}
    </div>
  );
}

export default Trending;
