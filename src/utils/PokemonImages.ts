// @ts-nocheck
const fetchImages = (context: string) => {
  // console.log(context)
  const images = {}
  const cache = {}
  function importAll(files) {
    for (const key in files) {
      cache[key] = files[key]
    }
    // files.keys().forEach((key) => (cache[key] = r(key)))
  }
  importAll(context)
  // console.log(cache)
  Object.entries(cache).forEach((module: string[]) => {
    let key = module[0].split("")
    key.splice(0, 2)
    key.splice(-4, 4)
    images[[key.join("")]] = module[1]
  })
  return images
}

export const images = fetchImages(
  // import.meta.glob("../assets/pokemons/shiny/*.(png|jpe?g|svg)$/", {eager: true}),
  import.meta.glob(
    [
      "../assets/pokemons/shiny/*.png",
      "../assets/pokemons/shiny/*.jpeg",
      "../assets/pokemons/shiny/*.jpg",
      "../assets/pokemons/shiny/*.svg",
    ],
    { eager: true },
  ),
)
export const defaultImages = fetchImages(
  // import.meta.glob("../assets/pokemons/default/*.", false, /\.(png|jpe?g|svg)$/),
  import.meta.glob(
    [
      "../assets/pokemons/default/*.png",
      "../assets/pokemons/shiny/*.jpeg",
      "../assets/pokemons/shiny/*.jpg",
      "../assets/pokemons/shiny/*.svg",
    ],
    { eager: true },
  ),
)
