/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

export default function NavbarTongpung() {
  const [active, setActive] = useState('navBar')

  const showNav = () =>{
    if(active === 'navBar'){
      setActive('navBar activeNavbar')
    }else{
      setActive('navBar')
    }
  }

  return (
    <section className='navBarSection'>
      <header className='header flex'>

        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><img src="https://avatars.githubusercontent.com/u/106297761?s=200&v=4" style={{width:'40px', height:'40px', marginBottom:'-5px'}} alt="" className="icon" /> Tongpung Id</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Favorite</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Most Flight</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>
            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>
          <div onClick={showNav} className="closeNavbar">
            <AiFillCloseCircle className='icon' />
          </div>

        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>


      </header>
    </section>
  )
}
