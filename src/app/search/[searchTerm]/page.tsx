import Results from "@/components/Results";

async function SearchPage({ params } : any) {
  const { searchTerm } = await params;
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}`);
  const data = await res.json();
  const results = data.results;

  console.log(results);

  return (
    <div className='pt-20'>
      {!results || (results.lenght === 0 && ( <h1 className='text-center pt-6'>No results found</h1>)) }
      {results && results.length !== 0 && <Results results={results} />}
    </div>
  );
}

export default SearchPage;
