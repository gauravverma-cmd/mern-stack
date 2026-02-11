
const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3">
        <div> <img src="\public\images\brand_logo.png" alt="" /></div>
        <div className="flex gap-4 font-medium">
            <a href="#">Menu</a>
            <a href="#">Product</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
        <button className="bg-red-600 rounded px-3 py-1 text-md text-white active:scale-95">Login</button>
    </div>
  )
}

export default Navbar