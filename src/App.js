import { Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Services from "./pages/Services";
import Realisations from './pages/Realisations';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Legal from './pages/Legal'
import ApiGitHub from './pages/ApiGitHub'

import Header from './components/Hearder'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header id="top"/>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/realisations' element={<Realisations />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/legal' element={<Legal />}/>
        <Route path='/profil-github' element={<ApiGitHub />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
