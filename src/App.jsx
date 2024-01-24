import React from 'react';
import { Header, Home, WID, Contact, Footer } from './containers/index.js';
import { Navbar } from './components/index.js';
import './app.css'

const App = () => {
  return (
    <div className='App'>
          <Navbar/>
          {/* <Header/> */}
          
          <Home/>
          <WID/>
          {/* <Contact/> */}

          {/* <Footer/> */}
    </div>
  )
}

export default App
