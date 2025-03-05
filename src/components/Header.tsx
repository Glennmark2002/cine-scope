import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <div className='navbar bg-base-100 fixed'>
      <Link href='/' className='btn btn-ghost text-2xl font-bold'>
        <Image src={'/popcorn.png'} alt='popcorn' width={48} height={48}></Image>
        Cine Scope
      </Link>
    </div>
  );
}

export default Header;
