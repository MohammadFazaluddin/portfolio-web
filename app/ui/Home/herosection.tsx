
export default function Hero() {
    return (
        <div className="max-w-screen-xl text-white mx-auto p-16 py-28 flex max-md:p-8 max-md:pt-32 max-md:flex-col max-md:gap-8">
            <div className="w-2/3 tracking-widest max-md:w-full">
                <div className="title-name text-8xl max-md:text-4xl w-96 max-md:w-44 max-md:leading-tight">
                    <div>
                        Hello, I am
                    </div>
                    <h1>Mohammad Fazaluddin</h1>
                </div>
                <div className="flex justify-end text-2xl max-md:text-lg max-md:mt-4">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                        className="-rotate-45 top-10 max-md:w-44 max-md:top-32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3.147 9l5 5h.707l5-5-.707-.707L9 12.439V2H8v10.44L3.854 8.292 3.147 9z"></path>
                    </svg> 
                    Full stack web developer
                </div>
            </div>
        </div> 
    );
}

