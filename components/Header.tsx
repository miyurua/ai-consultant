import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href={"/"}>
        <h1>Consultant AI</h1>
        <div>
          <h2 className="text-6xl md:text-9xl hidden">
            <span className="text-white">Digital Solutions</span> Tailored to
            You!
          </h2>
          <h1></h1>
        </div>
      </Link>
    </header>
  );
};

export default Header;
