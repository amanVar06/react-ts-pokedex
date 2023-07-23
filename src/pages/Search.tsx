import { Wrapper } from "../sections"
import { useEffect } from "react"

import { getInitialPokemonData } from "../app/reducers/getInitialPokemonData"
import { getPokemonData } from "../app/reducers/getPokemonData"
import { useAppDispatch, useAppSelector } from "../app/hooks"

function Search() {
  const dispatch = useAppDispatch()

  const { allPokemon } = useAppSelector((state) => state.pokemon)

  useEffect(() => {
    dispatch(getInitialPokemonData())
  }, [dispatch])

  useEffect(() => {
    if (allPokemon) {
      const clonedPokemons = [...allPokemon]

      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20)

      // console.log(randomPokemonsId)

      dispatch(getPokemonData(randomPokemonsId))
    }
  }, [allPokemon, dispatch])

  return <div>Search</div>
}

export default Wrapper(Search)
