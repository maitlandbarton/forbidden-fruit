import { useContext } from "react";
import { ItemDataContext } from "../context/ItemDataContext";
import ItemCard from "./ItemCard";

const ItemGrid = () => {
    const {item} = useContext(ItemDataContext);
    console.log(item);

    return (
        <div className="grid lg:grid-cols-4 w-3/4 md:w-screen gap-4 mx-auto px-3 md:px-20 md:grid-cols-3 sm:grid-cols-1">
            {item.map((obj) => (
                <ItemCard
                    key={obj.id}
                    img={obj.img}
                    name={obj.name}
                    price={obj.price}
                    id={obj.id}/>
            ))}
        </div>
    )
}

export default ItemGrid;