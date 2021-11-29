import Header from '../partials/Header';
import PhotosPage from '../partials/Photos/Photos';
import Footer from '../partials/Footer';

const Photos = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <PhotosPage />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Photos;