// Pokemone
// https://pokeapi.co/api/v2/pokemon/

import { useEffect, useState } from "react"

export function usePokemon(name:string){
    interface PokemonFull{
        name: string,
        image: string,
        ability: string,
        type: string,
        sprites: {
            front_default: string
        },
        abilities: Array<{
            ability: {
                name: string
            }
        }>,
        types: Array<{
            type: {
                name: string
            }
        }>,
        stats: Array<{
            stat: {
                name: string
            },
            base_stat: number
        }>
    }

    const [pokemon, setPokemon] = useState<PokemonFull>()

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((res) => res.json())
            .then(res => setPokemon(res))
    }, [name])
    
    return {pokemon}
}