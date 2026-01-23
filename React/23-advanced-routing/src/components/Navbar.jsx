import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-6 bg-amber-900">
      <h2 className="text-lg font-bold">AltisCore</h2>
      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/about">AboutUs</Link>
        <Link to="/course">Course</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">ContactUs</Link>

      </div>
    </div>
  );
};

export default Navbar;
