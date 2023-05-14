import { Link } from "react-router-dom"

function HomePageBio() {
    return (
        <div>
            <h1>Hi! I'm Mattie, an embroidery and textile artist based in Berlin, Germany.</h1>
            <br/>
            <p>I began embroidering in 2018 and immediately fell in love with the meditative and detail-oriented nature of the craft.</p>
            <br/>
            <img></img>
            <p>My work combines traditional embroidery techniques & materials with not so traditional subject matter 🍊</p>
            <Link to="/shop" className="rounded-xl bg-blue-200 p-2">Shop Now</Link>
        </div>
    )
}

export default HomePageBio