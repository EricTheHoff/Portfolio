import React from 'react';
import { Header, Home, WID, Contact, Footer, Projects } from './containers/index.js';
import { Navbar, Project } from './components/index.js';
import './app.css'

const App = () => {
  return (
    <div className='App'>
          <Navbar/>
          {/* <Header/> */}
          {/* <Projects/> */}
          
          <Home/>
          <WID/>
          {/* <Contact/> */}

          {/* <Footer/> */}
    </div>
  )
}

export default App
