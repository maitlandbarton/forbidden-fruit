import { useContext } from "react";
import { ItemDataContext } from "../context/ItemDataContext";
import { AccordionDataProvider } from "../context/AccordionDataContext";
import AccordionMenu from "./reusables/AccordionMenu";

function ItemDescription({ id }) {
  const { item } = useContext(ItemDataContext);
  const index = id - 1;

  return (
    <div className="flex w-screen flex-col md:flex-row justify-around pt-10">
      <div id="item-image" className="sm:w-full md:w-1/2 h-auto p-10">
        <img
          src={item[index].img}
          className="lg:max-w-xl mx-auto rounded-xl h-auto md:h-4/5 ring-4 ring-orange"
        ></img>
      </div>
      <div className="md:w-1/2 lg:w-full bg-teal m-10 rounded-xl h-full ring-4 ring-lime">
        <div className="ml-5">
          <h1 className="text-5xl mt-5 text-white">{item[index].name}</h1>
          <h2 className="text-3xl text-white">€{item[index].price}</h2>
          <div className="my-5">
            <p className="text-white text-lg">quantity</p>
          </div>
          <div className="my-10">
            <p className="text-white text-xl">{item[index].description}</p>
          </div>
          <div className="m-5">
            <p className="mx-auto p-4 bg-navy sm:w-1/3 md:w-1/2 lg:w-80 text-center text-white rounded-3xl text-xl hover:shadow-lg hover:shadow-lime">
              Add to Cart
            </p>
          </div>
          <AccordionDataProvider>
            <AccordionMenu props={item}/>
          </AccordionDataProvider>
        </div>
      </div>
    </div>
  );
}

export default ItemDescription;
