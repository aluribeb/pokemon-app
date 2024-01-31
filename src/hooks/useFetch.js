import axios from "axios"
import { useState } from "react"


const useFetch = url => {
    
    const [response, setResponse ]= useState()

    const getApi = () => {
        axios.get(url)
            .then(res => setResponse(res.data))
            .catch((err)=>{console.log("Error: "+ err)})
    }

    const getTypePokemon = (urlType) => {
            axios.get(urlType)
                .catch((err)=>{console.log("Error: "+ err)})
                .then(res => {
                    const obj = {
                        results: res.data.pokemon.map( pokeType => pokeType.pokemon)
                    }
                    setResponse(obj)
                })
            }

    return [response, getApi, getTypePokemon]
}

export default useFetch
