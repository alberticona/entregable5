import { useSelector } from "react-redux";
import PokemonList from "../components/PokemonList";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";

const Pokedex = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonName, setpokemonName] = useState("");
  const [types, setTypes] = useState([])

  const trainerName = useSelector((store) => store.trainerName.name);

  const pokemonsByName = allPokemons.filter((pokemon) => pokemon.name.includes(pokemonName))

  const handleSubmit = (e) => {
    e.preventDefault();
    setpokemonName(e.target.pokemonName.value.toLowerCase().trim());
  };

  const handleChangeType = (e) => {
    const url = e.target.value
    axios
      .get(url)
      .then(({ data }) => {
        if (url.includes("type")) {
          //? obtuvimos pokemones por tipo
          const pokemonsFormat = data.pokemon.map((pokemon) => pokemon.pokemon);
          setAllPokemons(pokemonsFormat);
        } else {
          //? obtuvimos todos los pokemones
          setAllPokemons(data.results);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?Limit=1292")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then(({ data }) => setTypes(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <Header />
      <main className="pt-5 px-10">
        <p className="text-2xl">
          <b className="text-red-600 font-bold">Bienvenido {trainerName},</b> aquí podrás encontrar tu Pokemón favorito
        </p>

        <form  className="py-5" onSubmit={handleSubmit}>
          <input className="shadow-md px-8 py-2 text-2xl" name="pokemonName" placeholder="Buscar un Pokémon..." type="text" />
          <button className="bg-red-600 px-8 py-2 text-white text-2xl" >Buscar</button>
          <select className="shadow-md px-20 py-2 text-2xl" onChange={handleChangeType}>
            <option value="https://pokeapi.co/api/v2/pokemon?Limit=1292">Todos los Pokémons</option>
            {types.map((type) => (
              <option value={type.url} className="capitalize" key={type.name}>{type.name}</option>
            ))}
          </select>
        </form>
        <PokemonList pokemons={pokemonsByName} />
      </main>
    </section>
  )
}
export default Pokedex;

