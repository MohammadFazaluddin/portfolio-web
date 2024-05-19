import ContactMe from "./ui/Home/contact";
import Footer from "./ui/Home/footer";
import Hero from "./ui/Home/herosection";
import NavMenu from "./ui/Home/navlinks";

export default function Home() {
  return (
        <main className="min-h-screen  max-md:p-10">
            <NavMenu />
            <Hero />
            <ContactMe />
            <Footer />
        </main>
  );
}
