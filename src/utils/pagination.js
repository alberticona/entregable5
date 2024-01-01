const paginatePokemons = (pokemons, currentPage) => {
    //? cantidad de pokemons por pagina
    const POKEMONS_PER_PAGE = 20;
    const sliceEnd = currentPage * POKEMONS_PER_PAGE;
    const sliceStart = sliceEnd - POKEMONS_PER_PAGE;
    const pokemnonsInCurrentPage = pokemons.slice(sliceStart, sliceEnd);

    //? Última página o la cantidad de páginas
    const lastPage = Math.ceil(pokemons.length / POKEMONS_PER_PAGE);

    //? Bloque actual
    const PAGES_PER_BLOCK = 7;
    const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK);

    //? Páginas que se van a mostrar en el bloque actual
    const pagesInCurrentBlock = [];
    const maxPage = actualBlock * PAGES_PER_BLOCK;
    const minPage = maxPage - PAGES_PER_BLOCK + 1;
    for (let i = minPage; i <= maxPage; i++) {
        if (i <= lastPage) {
            pagesInCurrentBlock.push(i);
        }
    }
    return {
        pokemnonsInCurrentPage,
        lastPage,
        pagesInCurrentBlock,
    };
}

export { paginatePokemons }