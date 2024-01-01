const Header = () => {
  return (
    <header className="relative">
        <div className="h-12 bg-red-500 relative"></div>
        <div className="absolute w-[250px] sm:w-[300px] bottom-6 left-10">
            <img src="/images/pokedex.png" alt="" />
        </div>
        <div className="h-10 bg-black"></div>
        <div className="absolute right-5 -translate-x-[20%] -bottom-0 z-20 h-[60%]">
        <img className="h-full" src="/images/pokeball-btn.png" alt="" />
        </div>
    </header>
  )
}
export default Header;