import grapefruit from "../../images/grapefruit.png"

function SpinningFruit({ml, mr, mt, mb, placement}) {
    return (
        <div>
            <img src={grapefruit} className={`animate-spinningText absolute w-36 ml-${ml} mr-${mr} mt-${mt} mb-${mb} ${placement}`}></img>
        </div>
    )
}

export default SpinningFruit;