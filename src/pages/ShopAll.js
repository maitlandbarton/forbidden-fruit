import ItemGrid from "../components/ItemGrid";
import { ItemDataProvider } from "../context/ItemDataContext";
import CustomOrder from "../components/reusables/CustomOrder";
import tealGrid from "../images/grid-teal.png"

function ShopAll() {
    return (
        <div style={{ backgroundImage: `url(${tealGrid})` }}>
            <h1 className="text-center text-6xl text-orange pt-10 pb-20">PR🍊DUCTS</h1>
            <ItemDataProvider>
            <ItemGrid/>
            </ItemDataProvider>
            <CustomOrder/>
        </div>
    )
}

export default ShopAll;