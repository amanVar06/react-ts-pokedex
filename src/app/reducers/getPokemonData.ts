import { createAsyncThunk } from "@reduxjs/toolkit"
import { genericPokemonType, generatedPokemonType } from "../../utils/Types"

// import { pokemonTypes } from "../../utils/PokemonTypes"
import { images, defaultImages } from "../../utils/PokemonImages"
import axios from "axios"

export const getPokemonData = createAsyncThunk(
  "pokemon/randomPokemon",
  async (pokemons: genericPokemonType[]) => {
    try {
      const pokemonsData: generatedPokemonType[] = []

      // console.log(images, defaultImages, typeof images, typeof defaultImages)

      // console.log(Object.keys(images))

      for await (const pokemon of pokemons) {
        const {
          data,
        }: {
          data: {
            id: number
            types: { type: genericPokemonType }[]
          }
        } = await axios.get(pokemon.url)

        //   const types = data.types.map(
        //     ({ type: { name } }: { type: { name: string } }) => ({
        //       // @ts-expect-error
        //       [name]: pokemonTypes[name],
        //     }),
        //   )

        let keyValue = `/assets/pokemons/shiny/${data.id}`

        // @ts-expect-error
        let image: string = images[keyValue]
        if (!image) {
          // @ts-expect-error
          image = defaultImages[keyValue]
        }

        console.log(image)

        //   if (image) {
        //     pokemonsData.push({
        //       name: pokemon.name,
        //       id: data.id,
        //       image,
        //       types,
        //     })
        //   }
      }

      // console.log(pokemonsData)
      // return pokemonsData
    } catch (err) {
      console.log(err)
    }
  },
)
