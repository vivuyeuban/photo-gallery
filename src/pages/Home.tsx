import Header from '../partials/Header';
import HeroHome from '../partials/Home/HeroHome';
import FeaturesHome from '../partials/Home/Features';
import FeaturesBlocks from '../partials/Home/FeaturesBlocks';
import Testimonials from '../partials/Home/Testimonials';
import Newsletter from '../partials/Home/Newsletter';
import Footer from '../partials/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;