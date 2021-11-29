import Header from '../partials/Header';
import Main from '../partials/MyAccount/Main';
import Photos from '../partials/MyAccount/Photos';
import Footer from '../partials/Footer';

const AllPhotos = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <Main>
          <Photos />
        </Main>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default AllPhotos;