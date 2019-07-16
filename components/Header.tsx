import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header: React.FC = () => (
  <nav>
    <Link href="/">
      <a style={linkStyle}>home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>about</a>
    </Link>
  </nav>
);

export default Header;
