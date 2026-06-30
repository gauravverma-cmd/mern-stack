import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  axios  from "axios";
import Loader from "./Loader";

const SingleProducts = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await axios(`https://fakestoreapi.com/products/${id}`);
       console.log(response.data)
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  },[]);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-96px)] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div  className="bg-[#3C3C3C] rounded-lg p-5 flex items-center flex-col">
      <img
        className="aspect-square object-contain p-3 w-md "
        src={product.image}
        alt={product.category}
      />

      <div className="p-5 flex flex-col items-center">
        <h1 className="text-3xl font-serif text-blue-300 font-bold line-clamp-2">{product.title}</h1>

        <p className="text-2xl text-white/50 my-2">$ {product.price}</p>

        <p className="text-xl mt-1 font-bold">⭐ {product.rating.rate}</p>

        <p className="text-xl mt-1 font-bold">{product.rating.count} Reviews</p>
        <p className="text-xl">{product.description}</p>
      </div>
    </div>
  );
};

export default SingleProducts;
