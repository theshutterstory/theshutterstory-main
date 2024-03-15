import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import PhotographerList from "./_components/PhotographerList";
import Footer from "./_components/Footer";
import FeaturingApp from "./_components/FeaturingApp";
// import RegisterPhotographer from "./_components/RegisterPhotographer";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <Hero />
      {/* Categories */}
      <CategorySearch />
      {/* Featured Photographers */}
      <PhotographerList />
      <FeaturingApp />
      {/* <RegisterPhotographer /> */}
      {/* Footer */}
      <Footer />
    </div>
  );
}
