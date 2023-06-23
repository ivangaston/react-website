import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosostrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';


function App(params) {
  return (
    <div className='App'>
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='Nosotros' element={<NosostrosPage />} />
          <Route path='Contacto' element={<ContactoPage />} />
          <Route path='Novedades' element={<NovedadesPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}
export default App;