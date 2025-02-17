import Link from "next/link";
export default function Header() {
  return (
    <header className="flex items-center justify-between shadow-black">
      <Link
        className="uppercase text-primary font-semibold text-2xl"
        href={"/"}
      >
        Pizza Z
      </Link>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link href={"/"}>Home</Link>
        <Link href="">Menu</Link>
        <Link href="">About</Link>
        <Link href="">Contract</Link>
      </nav>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        <Link href={"/login"}>Login</Link>
        <Link
          className="bg-primary rounded-full text-white px-8 py-2"
          href={"/register"}
        >
          Register
        </Link>
      </nav>
    </header>
  );
}
