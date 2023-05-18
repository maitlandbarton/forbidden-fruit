function MovingFruit( {direction, image} ) {
    return (
        <div className={`animate-${direction} h-auto flex flex-col`}>
            <img src={image} className="animate-spinningText px-6"></img>
        </div>
    )
}

export default MovingFruit;