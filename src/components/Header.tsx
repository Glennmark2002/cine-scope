import Theme from "./Theme";
import Link from "next/link";

function Header() {
  return (
    <div className='navbar bg-base-100 fixed z-50'>
      <div className='flex-1'>
        <Link href='/' className='btn btn-ghost text-2xl'>Cine Scope</Link>
      </div>
      <Theme />
    </div>
  );
}

export default Header;
