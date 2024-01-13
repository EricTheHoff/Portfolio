import React, { useState } from 'react';
import { List, XCircle } from 'react-bootstrap-icons';
import classNames from 'classnames';
import logoEllipse from '../../assets/logoEllipse.svg'
import './navbar.css';

const Menu = () => {
  return (
    <>
      <p><a href='#home'>Home</a></p>
      <p><a href='#wid'>What I Do</a></p>
      <p><a href='#contact'>Contact Me</a></p>
    </>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className={classNames('eh__navbar', { 'menu-open' : toggleMenu })}>
      <div className='eh__navbar-links'>

        <div className='eh__navbar-links_logo'>
          <p><img src={logoEllipse} alt='logo'/> Eric Hoffman <span>{`{`}</span></p>
        </div>

        <div className='eh__navbar-links_container'>
          <Menu/>
          <p id='final-link'><a href='#more'>More</a></p>
        </div>

        <div className='eh__navbar-menu'>
          {toggleMenu
            ? <XCircle color='#FFF' size={27} onClick={() => setToggleMenu(false)}/>
            : <List color='#FFF' size={27} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className='eh__navbar-menu_container scale-up-center'>
              <div className='eh__navbar-menu_container-links'>
                <Menu/>
                <p><a href='#more'>More</a></p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Navbar