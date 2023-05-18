import { Link } from "react-router-dom";

function ItemCard({img, name, price, id}) {
    return (
        <div className="hover:shadow-xl rounded-3xl hover:shadow-teal ring-2 ring-teal bg-white">
            <Link to={`/shop/${id}`}>
                <div className="rounded-3xl hover:underline hover:decoration-wavy hover:decoration-red">
                    <div className="h-60">
                        <img src={img} className="rounded-t-3xl w-full h-full object-cover"></img>
                    </div>
                    <div className="p-5">
                        <h1 className="text-xl text-navy">{name}</h1>
                        <p className="text-orange">€{price}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ItemCard;