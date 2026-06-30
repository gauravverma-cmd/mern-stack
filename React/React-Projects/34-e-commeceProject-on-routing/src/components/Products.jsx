import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await axios("https://fakestoreapi.com/products");

      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
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
    <div className="grid  grid-cols-5 max-[1200px]:grid-cols-4 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[450px]:grid-cols-1 gap-4 p-4 ">
      {products.map((item) => (
        <ProductCard key={item.id} items={item} />
      ))}
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

export default Products;
