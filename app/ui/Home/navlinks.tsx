import Link from "next/link";

export default function NavMenu() {
    return (
        <nav className="fixed top-0 h-16 p-5 pt-9 pr-32 flex gap-7 justify-end text-2xl bg-gradient-to-b from-black w-full max-md:p-20 max-md:text-lg max-md:pr-24">
            <span>
                Work
            </span>
            <span>
                Skills
            </span>
            <span>
                <a href="#contact">
                    Contact
                </a>
            </span>
        </nav>
    );
}

