import React from "react";
import PropTypes from "prop-types";

function App() {
  return (
    <div>
      {foodILike.map((x) => (
        <Food key={x.id} name={x.name} picture={x.image} rating={x.rating} />
      ))}
    </div>
  );
}

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://cdn.shopify.com/s/files/1/0190/5547/6836/products/ABMB23_1_1800x1800.jpg?v=1596215955",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwj6qLWOgJbrAhVh5bUKHXDyCzgYABAIGgJxbg&sig=AOD64_2knXICORl6usxFPFb3-MJCh6glRg&adurl&ctype=5&ved=2ahUKEwiX-aiOgJbrAhX2Vd8KHRYQBhUQvhd6BAgBECY",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwj6qLWOgJbrAhVh5bUKHXDyCzgYABALGgJxbg&sig=AOD64_1oTLGCZv21VdHa_0GbgYSNjwX2ng&adurl&ctype=5&ved=2ahUKEwiX-aiOgJbrAhX2Vd8KHRYQBhUQvhd6BAgBEDo",
    rating: 5,
  },
  {
    id: 4,
    name: "Sanitizer",
    image:
      "https://absolutenewyork.com/collections/best-sellers/products/hand-sanitizer-pump",
    rating: 1.5,
  },
  {
    id: 5,
    name: "Eyeliner",
    image:
      "https://absolutenewyork.com/collections/best-sellers/products/waterproof-gel-eye-liner",
    rating: 2.5,
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;
