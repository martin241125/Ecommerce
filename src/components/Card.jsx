import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Card() {
  const [item, setItem] = useState([]);
  const navigate = useNavigate();
  const handleClick = (event) => {
    navigate("/checkout");
  };

  const url = "https://fakestoreapi.com/products?limit=5";

  useEffect(() => {
    async function peticion() {
      const response = await axios.get(url);
      setItem(response.data);
    }
    peticion();
  }, []);

  return (
    <div className="mt-20">
      {item.map((items) => (
        <div key={items.id}>
          <h1>{items.title}</h1>
          <h1>{items.price}</h1>
          <h1>{items.category}</h1>
          <p>{items.description}</p>
          <img width={150} src={items.image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Card;
