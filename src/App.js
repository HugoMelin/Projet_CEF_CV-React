import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'

import Home from "./pages/Home";
import Services from "./pages/Services";
import Realisations from './pages/Realisations';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Legal from './pages/Legal'

import Header from './components/Hearder'
import Footer from './components/Footer';

function ApiGitHub () {
  const [user, setUsers]= useState([])
  const getUser = async() => {
    const res = await fetch("https://api.github.com/users/github-john-doe")
    const json = await res.json()
    setUsers(json)
  }
  useEffect(() =>{
    getUser()
  },[])

  return(
    {
      name: <p>{user.login}</p>,
      photo: `${user.avatar_url}`
    }
  )
}

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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
