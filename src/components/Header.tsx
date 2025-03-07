import Link from 'next/link';
import Image from 'next/image';
import Theme from './Theme';

function Header() {
  return (
    <div className='navbar bg-base-100 fixed border-2 border-base-200 z-50'>
      <div className='flex-1'>
        <Link href='/' className='btn btn-ghost text-2xl font-bold'>
          <Image src={'/popcorn.png'} alt='popcorn' width={48} height={48}></Image>
          Cine Scope
        </Link>
      </div>
      <Theme />
    </div>
  );
}

export default Header;
