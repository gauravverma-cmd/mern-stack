import { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../Context/ThemeContext'

const Navbar = () => {
const [theme] = useContext(ThemeDataContext)
   
   return (
    <div className={theme}>
        <h1>AliceCore</h1>
        <Nav2 />
    </div>
  )
}

export default Navbar