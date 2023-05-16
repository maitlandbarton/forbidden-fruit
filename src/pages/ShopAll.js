import ItemGrid from "../components/ItemGrid";
import { ItemDataProvider } from "../context/ItemDataContext";
import CustomOrder from "../components/reusables/CustomOrder";
import tealGrid from "../images/grid-teal.png"

function ShopAll() {
    return (
        <div style={{ backgroundImage: `url(${tealGrid})` }}>
            <h1>PRODUCTS</h1>
            <ItemDataProvider>
            <ItemGrid/>
            </ItemDataProvider>
            <CustomOrder/>
        </div>
    )
}

export default ShopAll;