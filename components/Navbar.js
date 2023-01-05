import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Support Site</h1>
            </div>
            <Link href="/">Home</Link>
            <Link href="/arsenal">Arsenal</Link>
            <Link href="/barcelona">Barcelona</Link>
            <Link href="/realmadrid">Real Madrid</Link>
        </nav>
    );
}

export default Navbar;