import React from 'react'
import './pokemoncard.css'
import pokeball from '../../assets/pokeball-bw.png'

const PokemonCard = ({ pokemon }) => {
    console.log(pokemon)
    return (
        <>
            <div className='pokemoncard__border' >
                <article className={`pokemoncard__header ${pokemon?.types[0].type.name}`}>
                    <header className='pokemoncard__header2' >
                        <img className="pokemoncard__img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                    </header>
                </article>
                <article className="pokemoncard__body">
                    <h2 className='pokemoncard__id' >#{pokemon?.id}</h2>
                    <div className="group__pokemoncard">
                        <div className="group__line"></div>
                        <h2 className="pokemoncard__name"> {pokemon?.name}</h2>
                        <div className="group__line2"></div>
                    </div>
                    <div className="pokemoncard__height-weight">
                        <div>
                            <span className="pokemoncard__subtitles"> Weight: </span>
                            <span className="pokemoncard__weight">{pokemon?.weight * 0.1}kg</span>
                        </div>
                        <div>
                            <span className="pokemoncard__subtitles"> Height: </span>
                            <span className="pokemoncard__height">{pokemon?.height * 10}cm</span>
                        </div>
                    </div>
                    <div className="pokemoncard__groups__type__skills">
                        <div className='pokemoncard__group__type' >
                            <div className="pokemoncard__title__type">Type: </div>
                            <div className="pokemon__group__of__types">
                                <span className={`pokemon__type__name ${pokemon?.types[0].type.name}`} >{pokemon?.types[0].type.name}</span>
                                {
                                    pokemon?.types[1] ?
                                        <span className={`pokemon__type__name2 ${pokemon?.types[1].type.name}`} >{pokemon?.types[1].type.name}</span> : ''
                                }
                            </div>
                        </div>
                        <div className='pokemoncard__group__skills' >
                            <div className="pokemoncard__title__skills">Skills: </div>
                            <div className="pokemoncard__group__abilities">
                                <span className='pokemon__ability__name' >{pokemon?.abilities[0].ability.name}</span>
                                <span className='pokemon__ability__name' >{pokemon?.abilities[1].ability.name}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="pokemoncard__stats__group">
                            <div className="group__stats">
                                <div className="group__line"></div>
                                <h2 className="pokemoncard__name"> Stats</h2>
                                <div className="group__line2"></div>
                                <img src={pokeball} alt="" className="pokemoncard__stats__img" />
                            </div>
                        </div>
                        <ul className='list__of__stats' >
                            <li>
                                <span className='pokemoncard__stats__title__item' >HP: </span>
                                <span className='pokemoncard__stats__number development' >{pokemon?.stats[0].base_stat}</span>
                                <div className="stats__bar">
                                    <span className="stats__bar__percentage"></span>
                                </div>
                            </li>
                            <li>
                                <span className='pokemoncard__stats__title__item' >Attack: </span>
                                <span className='pokemoncard__stats__number development' >{pokemon?.stats[1].base_stat}</span>
                                <div className="stats__bar">
                                    <span className="stats__bar__percentage"></span>
                                </div>
                            </li>
                            <li>
                                <span className='pokemoncard__stats__title__item' >Defense: </span>
                                <span className='pokemoncard__stats__number development' >{pokemon?.stats[2].base_stat}</span>
                                <div className="stats__bar">
                                    <span className="stats__bar__percentage"></span>
                                </div>
                            </li>
                            <li>
                                <span className='pokemoncard__stats__title__item' >Speed: </span>
                                <span className='pokemoncard__stats__number development' >{pokemon?.stats[3].base_stat}</span>
                                <div className="stats__bar">
                                    <span className="stats__bar__percentage"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
            <div className="pokemoncard__movements">
                <div className='pokemoncard__movements__group' >
                    <h2 className="pokemoncard__movements__name">Movements:</h2>
                    <div className="pokemoncard__line__movements"></div>
                    <img src={pokeball} alt="" className="pokemoncard__stats__img" />
                </div>
                <ul>
                    {pokemon?.moves.slice(0, 20).map((move, index) => (
                        <li key={index}>{move.move.name}</li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default PokemonCard
