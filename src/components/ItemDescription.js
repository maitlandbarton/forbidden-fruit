import { useContext } from "react";
import { ItemDataContext } from "../context/ItemDataContext";

function ItemDescription({ id }) {
  const { item } = useContext(ItemDataContext);
  const index = id - 1;

  return (
    <div className="flex w-screen justify-around border">
      <div id="item-image" className="w-full border border-black">
        <img src={item[index].img} className="max-w-xl mx-auto"></img>
      </div>
      <div className="w-full">
        <h1 className="text-5xl">{item[index].name}</h1>
        <h2 className="text-3xl">€{item[index].price}</h2>
      </div>
    </div>
  );
}

export default ItemDescription;
