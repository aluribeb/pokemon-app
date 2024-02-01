import React, { useRef } from 'react'
import { setTrainer } from '../store/states-slices/trainer.state'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import pokedexLogo from '../assets/pokedex-logo.png'
import './styles/homePage.css'

const HomePage = () => {

  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainer(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <div className='homepage__main'>
      <img src={pokedexLogo} alt="" className="homepage__img" />
      <h2 className='homepage__title' >Hi, Trainer! </h2>
      <p className='homepage__subtitle' >To launch this app, please provide your trainer name.</p>
      <form className='homepage__form' onSubmit={handleSubmit}>
        <input className='homepage__input' type="text" ref={inputTrainer} placeholder='Your Name..' />
        <button className='homepage__btn' >Gotta catch them all!</button>
      </form>
      <div className="homepage__border_container">
        <hr className="homepage__border_red"></hr>
        <div className='homepage__group_pokeball' >
          <div className="homepage__pokeball"></div>
          <hr className="homepage__border_black"></hr>
        </div>
      </div>
    </div>
  )
}

export default HomePage
