import { usePokemon } from "../services/usePokemon"

interface PokemonProps {
    name: string
    cerrarModal: ()=> void
}

export function CardFullInfo({ name, cerrarModal }: PokemonProps){
    const pokemon = usePokemon(name)
    console.log("Pokemon FULL: ", pokemon)

    return(
        <div className="card-full-info">
            <h2>{name.toUpperCase()}</h2> 
            <div className="card-image">
              <img src={pokemon.pokemon?.sprites?.front_default} alt="imagen de pokemon" />
            </div>
            <h3>Abilities</h3>
            {pokemon?.pokemon?.abilities?.map((item, index) => (
                <h4 key={index}>{item.ability.name}</h4>
            ))}
            <h3>Tipo:</h3>
            {pokemon?.pokemon?.types?.map((item: { type: { name: string } }, index: number) => (
                <h4 key={index}>{item.type.name}</h4>
            ))}
            <h3>Estadísticas:</h3>
            <ul>
            {pokemon?.pokemon?.stats?.map((item, index) => (
                <li key={index}>
                <span className="red600">{item.stat.name}</span>: {item.base_stat}
                </li>
            ))}
            </ul>
            <button className="btn" onClick={cerrarModal}>Cerrar</button>
        </div>
    )
}