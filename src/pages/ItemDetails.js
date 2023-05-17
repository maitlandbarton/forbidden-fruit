import { useParams } from "react-router-dom";
import { ItemDataProvider } from "../context/ItemDataContext";
import ItemDescription from "../components/ItemDescription";
import tealGrid from "../images/grid-teal.png"

function ItemDetails() {
    const {id} = useParams();

    return (
        <div style={{ backgroundImage: `url(${tealGrid})` }}>
        <ItemDataProvider>
            <ItemDescription id={id}/>
        </ItemDataProvider>
        </div>
    )
}

export default ItemDetails;