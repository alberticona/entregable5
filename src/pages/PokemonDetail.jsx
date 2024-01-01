import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { gradientsByType } from "../constants/pokemon";

const PokemonDetail = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const { id } = useParams();

  const getPercentBarProgress = (stat_value) => {
    const percent = (stat_value * 100) / 255;
    return percent + "%";
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(({ data }) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <Header />
      <article className={`${gradientsByType[pokemonInfo?.types[0].type.name]} text-center text-2xl max-w-[500px] mx-auto relative h-[340px]`}>
        <header  >
          <img src={pokemonInfo?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <span className="text-4xl font-bold py-1"># {pokemonInfo?.id}</span>
        <h3 className="text-4xl font-bold py-1 capitalize">{pokemonInfo?.name}</h3>
        <div className="grid grid-cols-2 gap-2 text-center text-2xl max-w-[500px] py-5">
          <div>
            <h5>Peso</h5>
            <span>{pokemonInfo?.weight}</span>
          </div>
          <div>
            <h5>Altura</h5>
            <span>{pokemonInfo?.height}</span>
          </div>
        </div>
        <section className="pb-10">
          <h4 className="text-left text-4xl font-bold py-1 pb-5">Stats</h4>
          <ul className="grid gap-3">
            {pokemonInfo?.stats.map((stat) => (
              <li key={stat.stat.name}>
                <div className="flex justify-between">
                  <h5 className="capitalize">{stat.stat.name}</h5>
                  <span>{stat.base_stat}/255</span>
                </div>
                <div className="h-6 bg-slate-200 rounded-sm overflow-hidden">
                  <div style={{
                    width: getPercentBarProgress(stat.base_stat),
                  }} 
                  className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 w-[50%]">
                  </div>
                </div>
              </li>
          ))}
          </ul>
        </section>
      </article>
    </section>
  )
}
export default PokemonDetail;