import Header from '../partials/Header';
import Main from '../partials/MyAccount/Main';
import AddNewPage from '../partials/MyAccount/AddNew';
import Footer from '../partials/Footer';

const AddNew = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <Main>
          <AddNewPage />
        </Main>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default AddNew;