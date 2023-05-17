import grapefruit from "../../images/grapefruit.png"

function SpinningFruit() {
    return (
        <div>
            <img src={grapefruit} className="animate-spinningText absolute w-36 ml-20"></img>
        </div>
    )
}

export default SpinningFruit;