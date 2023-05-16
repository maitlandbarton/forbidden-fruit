import { Link } from "react-router-dom";

function ItemCard({img, name, price, id}) {
    return (
        <div>
            <Link to={`/shop/${id}`}>
                <div>
                    <div>
                        <img src={img}></img>
                    </div>
                    <div>
                        <h1>{name}</h1>
                        <p>{price}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ItemCard;