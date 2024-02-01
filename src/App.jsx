import React from 'react';
import { Home, WID, Contact, Footer } from './containers/index.js';
import { Navbar } from './components/index.js';
import { Toaster } from 'react-hot-toast'
import './app.css'

const App = () => {
  return (
    <div className='App'>
      <Toaster
        toastOptions={{
          duration: 4000,
          style: {
            border: 'none',
            background: '#9191E9',
            color: '#FFF',
            fontFamily: 'var(--font-family)',
            fontSize: '18px',
            padding: '1rem',
          }
        }}
      />
      <Navbar/>
      <Home/>
      <WID/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
