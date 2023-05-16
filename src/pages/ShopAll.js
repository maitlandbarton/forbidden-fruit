import ItemGrid from "../components/ItemGrid";
import { ItemDataProvider } from "../context/ItemDataContext";
import CustomOrder from "../components/reusables/CustomOrder";
import navyGrid from "../images/grid-navy.png"

function ShopAll() {
    return (
        <div style={{ backgroundImage: `url(${navyGrid})` }}>
            <h1>PRODUCTS</h1>
            <ItemDataProvider>
            <ItemGrid/>
            </ItemDataProvider>
            <CustomOrder/>
        </div>
    )
}

export default ShopAll;