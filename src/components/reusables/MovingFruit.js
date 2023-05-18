import grapefruit from "../../images/grapefruit.png"

function MovingFruit({ direction }) {
    return (
        <div className={`animate-${direction} h-auto flex flex-col`}>
            <img src={grapefruit} className="animate-spinningText"></img>
        </div>
    )
}

export default MovingFruit;