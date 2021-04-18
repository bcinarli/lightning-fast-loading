import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import RouterSwitch from './components/router-switch/router-switch';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="page-content">
        <RouterSwitch />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
