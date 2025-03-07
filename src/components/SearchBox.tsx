'use client';
import { useRouter } from 'next/navigation';
import { useState } from "react";

function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSubmit = (e : any) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  }

  return (
    <form onSubmit={handleSubmit} className='flex justify-between px-5 max-w-6xl mx-auto'>
      <input type='text' placeholder='Search keywords...' value={search} onChange={(e) => setSearch(e.target.value)} className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1' />
      <button disabled={search === ''} className='text-amber-600 disabled:text-gray-400'> Search </button>
    </form>
  );
}

export default SearchBox;
