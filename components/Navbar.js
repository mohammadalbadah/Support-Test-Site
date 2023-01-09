import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Support Site</h1>
            </div>
            <Link href="/">Home</Link>
            <Link href={{ pathname: "/products", query: "arsenal" }}>Arsenal</Link>
            <Link href={{ pathname: "/products", query: "barcelona" }}>Barcelona</Link>
            <Link href={{ pathname: "/products", query: "realmadrid" }}>Real Madrid</Link>
        </nav>
    );
}

export default Navbar;