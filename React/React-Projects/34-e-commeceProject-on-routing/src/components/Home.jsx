import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setLoading(true);

      const [catRes, prodRes] = await Promise.all([
        axios("https://fakestoreapi.com/products/categories"),
        axios("https://fakestoreapi.com/products?limit=4"),
      ]);

      setCategories(catRes.data);
      setFeatured(prodRes.data);
    } catch (error) {
      console.error("Error fetching home data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-96px)] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-[#1C1C1C] text-white">
      {/* Hero */}
      <section className="px-6 py-20 max-w-7xl mx-auto flex flex-col items-start">
        <p className="uppercase tracking-[0.3em] text-sm text-white/40 mb-4">
          New drops, every week
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] mb-6 max-w-3xl">
          Shop what<br />you actually need.
        </h1>
        <p className="text-white/50 text-lg max-w-xl mb-8">
          Electronics, jewelry, and everyday wear — no fluff, just the stuff worth buying.
        </p>
        <button
          onClick={() => navigate("/products")}
          className="bg-white text-[#1C1C1C] font-bold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors"
        >
          Browse all products
        </button>
      </section>

      {/* Categories */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Shop by category</h2>
        <div className="grid grid-cols-2 max-[600px]:grid-cols-1 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => navigate(`/products?category=${encodeURIComponent(cat)}`)}
              className="bg-[#3C3C3C] rounded-lg p-8 text-left hover:bg-[#4a4a4a] transition-colors"
            >
              <p className="text-xl font-bold capitalize">{cat}</p>
              <p className="text-white/40 mt-1">Shop now →</p>
            </button>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured products</h2>
          <button
            onClick={() => navigate("/products")}
            className="text-white/50 hover:text-white transition-colors"
          >
            View all →
          </button>
        </div>
        <div className="grid grid-cols-4 max-[1200px]:grid-cols-3 max-[900px]:grid-cols-2 max-[500px]:grid-cols-1 gap-4">
          {featured.map((item) => (
            <ProductCard key={item.id} items={item} />
          ))}
        </div>
      </section>
    </div>
  );
};
const ProductCard = ({ items }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${items.id}`)}
      className="group bg-[#3C3C3C] rounded-lg p-5 cursor-pointer transition-all duration-300 hover:bg-[#474747] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
    >
      <div className="overflow-hidden rounded-lg">
        <img
          className="aspect-square object-contain p-3 transition-transform duration-300 group-hover:scale-110"
          src={items.image}
          alt={items.category}
        />
      </div>

      <div className="p-5">
        <h1 className="text-xl font-bold line-clamp-2 transition-colors duration-300 group-hover:text-white/90">
          {items.title}
        </h1>

        <p className="text-2xl text-white/50 my-2">$ {items.price}</p>

        <p className="text-xl mt-1 font-bold">⭐ {items.rating.rate}</p>

        <p className="text-xl mt-1 font-bold">{items.rating.count} Reviews</p>
      </div>
    </div>
  );
};
export default Home;