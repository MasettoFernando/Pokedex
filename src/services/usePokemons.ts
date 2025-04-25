// Pokemones
// https://pokeapi.co/api/v2/pokemon

import { useEffect, useState } from "react";

export function usePokemons() {
  interface Pokemon {
    name: string;
    url: string;
    image: string;
  }

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => {
        const promisesArray = data.results.map((pokemon: Pokemon) => {
          return fetch(pokemon.url)
            .then((res) => res.json())
            .then((json) => ({
              ...pokemon,
              image: json.sprites.front_default,
            }));
        });
  
        Promise.all(promisesArray).then((pokemonsConImagen) => {
          setPokemons(pokemonsConImagen);
        });
      })
      .catch((error) => {
        console.error("Error al cargar los pokemones", error);
      });
  }, []);

  return { pokemons };
}
