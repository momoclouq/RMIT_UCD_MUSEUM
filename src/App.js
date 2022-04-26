import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ScrollToTop from './hooks/ScrollToTop';
import Landingpage from './pages/Landingpage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Landingpage />
      </ScrollToTop>
    </BrowserRouter>
    
  );
}

export default App;
