import ItemGrid from "../components/ItemGrid";
import { ItemDataProvider } from "../context/ItemDataContext";
import CustomOrder from "../components/reusables/CustomOrder";

function ShopAll() {
    return (
        <div>
            <h1>PRODUCTS</h1>
            <ItemDataProvider>
            <ItemGrid/>
            </ItemDataProvider>
            <CustomOrder/>
        </div>
    )
}

export default ShopAll;