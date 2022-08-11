import Link from "next/link";

const Header = () => {
    return (
        <div className="logo">
            <Link href="/"><a>Home</a></Link>&nbsp; | &nbsp;
            <Link href="/about"><a>About</a></Link> &nbsp; | &nbsp;
            <Link href="/contact"><a>Contact</a></Link>
        </div>
    );
}

export default Header;