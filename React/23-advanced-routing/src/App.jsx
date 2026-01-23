import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import NotFound from "./pages/NotFound";
import Kids from "./pages/Kids";
import Course from "./pages/Course";
import CourseDetail from "./pages/CourseDetail";
import Navbar2 from "./components/Navbar2";

const App = () => {
  const navigate = useNavigate();


  return (
    <div className="h-screen bg-[#1e1e1e] text-white">
      <Navbar />
      <Navbar2 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* This is dynamic routing where we can chnage the details in the course*/}
        <Route path="/course" element={<Course />}/>
        <Route path="/course/:courseId" element={<CourseDetail/>} />

        <Route path="/product" element={<Product />}> 
        {/* This is a nested Routing, in which Product has more routes in it */}     
        <Route path="men" element={<Mens />} />
        <Route path="women" element={<Womens />} />  
        <Route path="kids" element={<Kids />} />
        
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
