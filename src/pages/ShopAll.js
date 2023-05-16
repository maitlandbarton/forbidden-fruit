import ItemGrid from "../components/ItemGrid";
import { ItemDataProvider } from "../context/ItemDataContext";

function ShopAll() {
    return (
        <div>
            <h1>PRODUCTS</h1>
            <ItemDataProvider>
            <ItemGrid/>
            </ItemDataProvider>
        </div>
    )
}

export default ShopAll;