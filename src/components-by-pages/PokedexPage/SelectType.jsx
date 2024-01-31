import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import './selectype.css'


const SelectType = ({ setTypeSelected }) => {


    const url = 'https://pokeapi.co/api/v2/type'
    const [types, getTypes] = useFetch(url)

    useEffect(() => {
        getTypes()
    }, [])

    const typeRef = useRef()
    const handleChange = () => {
        setTypeSelected(typeRef.current.value)
    }
    

    return (
        <select ref={typeRef} onChange={handleChange} className="selectType__main" id="">
            <option className='selectType__option' value='allPokemon'>All Pokémon!</option>
            {
                types?.results.map(type => (
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))
            }
        </select>
    )
}

export default SelectType
