
interface Pokemon {
  name: string;
  // url: string,
  image: string;
  handlePokemonFullInfo: (p: string) => void
}

// export function Card({name, url}:Pokemon){
export function Card({ name, image, handlePokemonFullInfo }: Pokemon) {

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-image">
          <img src={image} alt="imagen de pokemon" />
        </div>
        <h2>{name}</h2>
        <button onClick={() => handlePokemonFullInfo(name)} className="btn">
          Ver más información
        </button>
      </div>
    </div>
  );
}
