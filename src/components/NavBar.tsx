import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-end font-medium space-x-4 py-7 px-12">
      <Link href="/" className="text-active">
        Blog
      </Link>
      <Link href="#">Works</Link>
      <Link href="#">Contact</Link>
    </nav>
  );
};

export default NavBar;
