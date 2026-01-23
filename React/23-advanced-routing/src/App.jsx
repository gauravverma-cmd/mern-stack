import { Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Kids from "./pages/Kids";
import Course from "./pages/Course";
import CourseDetail from "./pages/CourseDetail";
import NotFound from "./pages/NotFound";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white">
      <Navbar />
      <Navbar2 />

      <Outlet />

      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      {/* Routes WITH navbar/footer */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/course" element={<Course />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />

        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Mens />} />
          <Route path="women" element={<Womens />} />
          <Route path="kids" element={<Kids />} />
        </Route>
      </Route>

      {/* 404 route WITHOUT navbar/footer */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
