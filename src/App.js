import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Calculator from './pages/Calculator';
import Faq from './pages/Faq';
import Guide from './pages/Guide';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='calculator' element={<Calculator />} />
          <Route path='faq' element={<Faq />} />
          <Route path='guide' element={<Guide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
