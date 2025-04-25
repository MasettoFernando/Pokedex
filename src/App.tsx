import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { CardFullInfo } from "./components/CardFullInfo";
import { usePokemons } from "./services/usePokemons";
// Pokemones 
// https://pokeapi.co/api/v2/pokemon

// Pokemon 
// https://pokeapi.co/api/v2/pokemon/{bulbasaur}


function App() {
  const [showFullInfo, setShowFullInfo] = useState<boolean>(false)
  const [namePokemon, setNamePokemon] = useState<string>()

    const pokemons = usePokemons().pokemons
    console.log("Pokemons: ", pokemons)

    const handlePokemonFullInfo = (name: string) => {
      setShowFullInfo(!showFullInfo)
      setNamePokemon(name)
    }
    const cerrarModal = () => {
      setShowFullInfo(false)
    }
  

  return (
    <>
      <h1>Pokedex</h1>
      <div className="grid">
        {
          pokemons?.map((pokemon) => (
            <Card name={pokemon?.name} image={pokemon?.image} handlePokemonFullInfo={handlePokemonFullInfo}/>
          ))
        }
      </div>
      {showFullInfo && (
        <div className="overlay">
          <CardFullInfo name={namePokemon!} cerrarModal={cerrarModal} />
        </div>
      )}
    </>
  );
}

export default App;
