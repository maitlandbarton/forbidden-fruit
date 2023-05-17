import { useParams } from "react-router-dom";
import { ItemDataProvider } from "../context/ItemDataContext";
import ItemDescription from "../components/ItemDescription";

function ItemDetails() {
    const {id} = useParams();

    return (
        <ItemDataProvider>
            <ItemDescription id={id}/>
        </ItemDataProvider>
    )
}

export default ItemDetails;