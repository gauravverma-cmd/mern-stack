import './App.css'
import Navbar from './components/Navbar'
import NewsPage from './Pages/NewsPage'
import Category from './components/Category'
import Footer from './components/Footer'
function App() {

  return (
    <>
     <Navbar className="sticky top-0 z-20"/>

     <Category className="py-8 sticky top-14 z-10 bg-base-100" /> 
     
     <NewsPage className='pb-10'/>

     <Footer />
    </>
  )
}

export default App
