import React, { useState } from "react";
// import Product from "./components/Product";
import "./App.css";
import ProductList from "./components/ProductList";
const Saman = [
  {
    id: 1,
    name: "Nike Journey Run",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5da216af-dd4a-42d3-a7b1-b0caa868f48c/W+NIKE+JOURNEY+RUN.png",
    price: 100,
  },
  {
    id: 2,
    name: "Nike Superfly 10",
    image:
      "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/3f5dec25-5062-4afa-84de-5345165b2c46/ZM+SUPERFLY+10+ELITE+MDS+FG.png",
    price: 60,
  },
  {
    id: 2,
    name: "에어 조던 1 미드",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/30eab918-d51f-473a-8012-46bf4d99000c/AIR+JORDAN+1+MID.png",
    price: 80,
  },
];

export default function App() {
  const [products, setProducts] = useState(Saman);
  return <ProductList products={products} />;
}
