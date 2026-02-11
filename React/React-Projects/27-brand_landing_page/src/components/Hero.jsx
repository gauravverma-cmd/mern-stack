import LeftHero from "./LeftHero"
import RIghtHero from "./RIghtHero"

const Hero = () => {
  return (
    <div className="flex justify-between px-18">
    <LeftHero />
    <RIghtHero />
    </div>
  )
}

export default Hero