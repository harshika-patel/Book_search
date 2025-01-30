import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
function App() {
  

  return (
    <>
   <BrowserRouter>
    <Header/>
   
    <main className="main">
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      {/* <Route path="/:photoId" element={<PhotoDetailsPage photos={photos}/>}/> */}
    </Routes>
    </main>
    
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
