import React from 'react';
import { Header, Home, WID, Contact, Footer } from './containers';
import { Navbar, Message } from './components';
import './app.css'

const App = () => {
  return (
    <div className='App'>
          <Navbar/>
          <Header/>

          {/* <Home/> */}
          {/* <WID/>
          <Contact/>

          <Footer/> */}
    </div>
  )
}

export default App