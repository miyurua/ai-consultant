import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href={"/"}>
        <h1>Consultant AI</h1>
        <div>
          <h2>Digital Solutions Tailored to You!</h2>
        </div>
      </Link>
    </header>
  );
};

export default Header;