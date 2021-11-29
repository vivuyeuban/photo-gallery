import Header from '../partials/Header';
import Main from '../partials/MyAccount/Main';
import Information from '../partials/MyAccount/Information';
import Footer from '../partials/Footer';

const MyAccount = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <Main>
          <Information />
        </Main>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default MyAccount;