import { useDispatch } from "react-redux";
import { setTrainerName } from "../store/slices/trainerName.slice";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerName(e.target.trainerName.value));
    navigate("/pokedex");
  };
  
  return (
    <section className="grid grid-rows-[1fr_auto] h-screen overflow-hidden">
      <div className="text-center justify-self-center self-center">
        <main>
          <header>
            <img src="/images/pokedex.png" alt="" />
          </header>
          <h3 className="text-red-600 text-4xl font-bold pt-8" >¡Hola entrenador!</h3>
          <p className="p-4">Para comenzar ¡Cuál es tu nombre?</p>
          <form onSubmit={handleSubmit}>
            <input className="shadow-md py-2 px-10"
            name="trainerName"
            placeholder="Tú nombre es..." 
            type="text" 
            autoComplete="off"
            required
            />
            <button className="bg-red-600 px-8 py-2 text-white" type="submit">Comenzar</button>
          </form>
        </main>
      </div>
      <Footer />
    </section>
  )
}
export default Home;