import React, { useState } from 'react';
import { Header, Home, WID, Contact, Footer, Projects } from './containers';
import { Navbar, Message } from './components';
import './app.css'

const App = () => {
  const [showProj, setShowProj] = useState(false)

  const projBtn = () => {
    setShowProj(true);
  }
  
  return (
    <div className='App'>
          <Navbar/>
          
          <Home/>
          {/* <div className={`header ${showProj ? 'slide-out' : ''}`}>
            <Header
              handleClick={projBtn}
            />
          </div> */}
          {/* {showProj && <Projects className={`projects ${showProj ? 'slide-in' : ''}`}/>} */}
          <WID/>
          {/* <Contact/> */}

          {/* <Footer/> */}
    </div>
  )
}

export default App