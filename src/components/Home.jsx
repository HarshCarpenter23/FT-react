
import Navbar from "./Navbar";

const Home = () => {
   
    return (
        <>
            <div className="hero">
                <video autoPlay loop muted playsInline className="back-video">
                    <source src="Untitled video - Made with Clipchamp.mp4" type="video/mp4" />
                </video>

                <Navbar />
                <div className="content">
                    <h1>Taste the Temptation & Break the Rules.</h1>
                    <a href="./page2.html">Explore</a>
                </div>
                </div>
        </>
    )
}

export default Home;