import Pokeball from "../assets/pokeball.png"
import Pokeball2 from "../assets/pokeball2.png"

export default function Background() {
  return (
    <div className="background">
      <img src={Pokeball} alt="pokeball1" className="pokeball pokeball1" />
      <img src={Pokeball2} alt="pokeball2" className="pokeball pokeball2" />
      <img src={Pokeball} alt="pokeball1" className="pokeball pokeball3" />
      <img src={Pokeball2} alt="pokeball2" className="pokeball pokeball4" />
      <img src={Pokeball} alt="pokeball1" className="pokeball pokeball5" />
      <img src={Pokeball2} alt="pokeball2" className="pokeball pokeball6" />
    </div>
  )
}
