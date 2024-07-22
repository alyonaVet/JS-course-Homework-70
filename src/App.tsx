import NewContact from './containers/NewContact/NewContact';
import { Route, Routes} from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage';

const App = () => {

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/new-contact" element={<NewContact />} />
          <Route path="*" element={<h3 className="mt-3 mb-5 text-center">Page not found</h3>} />
        </Routes>
      </main>
    </>
  );
};

export default App;
