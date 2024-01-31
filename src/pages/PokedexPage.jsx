import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch.js'
import PokeCard from '../components-by-pages/PokedexPage/PokeCard.jsx'
import SelectType from '../components-by-pages/PokedexPage/SelectType.jsx'
import './styles/PokedexPage.css'

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemon')


  const trainerName = useSelector(states => states.trainer)
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=500&offset=0'
  const [pokemons, getPokemons, getTypePokemon] = useFetch(url)

  useEffect(() => {
    if (typeSelected === 'allPokemon') {
      getPokemons()
    } else {
      getTypePokemon(typeSelected)
    }
  }, [typeSelected])

  const inputName = useRef()

  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputName.current.value.trim().toLowerCase())
  }

  const cbFilter = (pokeInfo) => pokeInfo.name.toLowerCase().includes(inputValue)

  return (
    <div className='pokedexPage__main' >
      <h2 className='pokedexPage__name_trainer' ><span className='pokedexPage__greeting'> Hi, {trainerName}</span> which ones of all of these Pokémon will you catch?</h2>

      <div className='pokedexPage__group' >
        <form onSubmit={handleSearch}>
          <input className='pokedexPage__input' type="text" ref={inputName} placeholder="Write your Pokémon's name here" />
          <button className='pokedexPage__btn' >Search</button>
        </form>
        <div className='pokedexPage__selectType'>
          <SelectType
            setTypeSelected={setTypeSelected}
          />
        </div>
      </div>
      <div className='pokecard__container' >
        {
          pokemons?.results.filter(cbFilter).map(pokeInfo => (
            <PokeCard
              key={pokeInfo.url}
              url={pokeInfo.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PokedexPage
