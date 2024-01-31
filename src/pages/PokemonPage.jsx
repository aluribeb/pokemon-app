import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import PokemonCard from '../components-by-pages/PokemonPage/PokemonCard'


const PokemonPage = () => {
  	
  const {id} = useParams()
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

  const [ pokemon, getPokemon ] = useFetch(url)

    useEffect(()=> {
      getPokemon()
    }, [])

  return (
    <div className='pokemonpage__main' >
      <PokemonCard 
      pokemon={pokemon}
      />
    </div>
  )
}

export default PokemonPage
