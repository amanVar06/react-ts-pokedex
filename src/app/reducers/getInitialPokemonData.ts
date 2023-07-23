import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { pokemonsRoute } from "../../utils/Constants"

export const getInitialPokemonData = createAsyncThunk(
  "pokemon/initialData",
  async () => {
    try {
      const response = await axios.get(pokemonsRoute)
      // console.log(response.data)
      return response.data?.results
    } catch (err) {
      console.log(err)
    }
  },
)
