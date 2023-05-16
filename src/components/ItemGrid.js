import { useContext } from "react";
import { ItemDataContext } from "../context/ItemDataContext";

const ItemGrid = () => {
    const {item} = useContext(ItemDataContext);
    console.log(item);

    return (
        <div className="grid grid-cols-4 w-screen">
            {item.map((obj) => (
                <img src={obj.img} className="rounded-2xl w-60"></img>
            ))}
        </div>
    )
}

export default ItemGrid;