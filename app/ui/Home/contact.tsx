import Link from "next/link";

export default function ContactMe() {
    return (
        <section id="contact" className="min-h-screen mx-auto max-w-screen-xl flex justify-center text-8xl max-md:text-5xl max-md:p-0 max-md: flex-col p-20 leading-tight">
            <div>
                INTERESTED IN WORKING WITH ME?
            </div>
            <div className="flex">
                <Link className="border-b-2 border-gray-800 hover:border-white hover:ease-in ease-out duration-150" href="mailto:mohammadfazal.tech@gmail.com">
                    LET'S TALK
                </Link> 
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                    className="-rotate-45 top-10 relative" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M3.147 9l5 5h.707l5-5-.707-.707L9 12.439V2H8v10.44L3.854 8.292 3.147 9z"></path>
                </svg>
            </div>
        </section>
    );
}

