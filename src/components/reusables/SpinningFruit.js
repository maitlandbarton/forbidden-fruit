function SpinningFruit({ml, mr, mt, mb, placement, image}) {
    return (
        <div>
            <img src={image} className={`animate-spinningText absolute w-36 ml-${ml} mr-${mr} mt-${mt} mb-${mb} ${placement}`}></img>
        </div>
    )
}

export default SpinningFruit;