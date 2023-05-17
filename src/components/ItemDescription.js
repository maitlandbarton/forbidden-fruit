import { useContext } from "react";
import { ItemDataContext } from "../context/ItemDataContext";

function ItemDescription({ id }) {
  const { item } = useContext(ItemDataContext);
  const index = id - 1;

  return (
    <div className="flex w-screen justify-around pt-10">
      <div id="item-image" className="w-full p-10">
        <img src={item[index].img} className="max-w-xl mx-auto rounded-xl h-4/5 ring-4 ring-lime"></img>
      </div>
      <div className="w-full bg-teal m-10 rounded-xl ring-4 ring-lime">
        <div className="ml-5">
        <h1 className="text-5xl mt-5 text-white">{item[index].name}</h1>
        <h2 className="text-3xl text-white">€{item[index].price}</h2>
        <p>quantity</p>
        <p>{item[index].description}</p>
        <p className="mx-auto p-4 bg-navy w-80 text-center text-white rounded-3xl text-xl hover:shadow-lg hover:shadow-lime">Add to Cart</p>
        </div>
      </div>
    </div>
  );
}

export default ItemDescription;
