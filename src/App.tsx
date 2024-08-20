import { Suspense } from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Loding from './pages/Loding';
import About from './pages/about';

// const About = lazy(() => import('./pages/about'));

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Suspense fallback={<Loding />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
