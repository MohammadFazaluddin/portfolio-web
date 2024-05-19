import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full max-w-screen-xl mx-auto bg-white text-black text-xl p-10">
            <div className="flex justify-around">
                <Link href="https://github.com/mohammadFazaluddin/" target="_blank"> GitHub </Link>
                <Link href="https://www.linkedin.com/in/smfazaluddin/" target="_blank"> LinkedIn </Link>
            </div>
        </footer>
    );
}

