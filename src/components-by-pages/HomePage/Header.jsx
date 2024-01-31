import React from 'react'
import './header.css'
import pokedexLogo from '../../assets/pokedex-logo.png'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className="header__border_container">
    <hr className="header__border_red"></hr>
    <div className='header__group_pokeball' >
      <div className="header__pokeball"></div>
      <Link to="/">
      <img className='header__img' src={pokedexLogo}/>
      </Link>
      <hr className="header__border_black"></hr>
    </div>
  </div>
  )
}

export default Header
