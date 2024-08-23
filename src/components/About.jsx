import Navbar from "./Navbar";

const About = () => {
  return (
    <div className="hero-2">
      <video autoPlay loop muted playsInline className="back-video">
        <source src="Untitled video - Made with Clipchamp (1) (1).mp4" type="video/mp4" />
      </video>
      
      <Navbar />
      
      <div className="content-2">
        <div className="container-2">
          <div className="login-card">
            <h>Home of chocolate</h>
            <p>In 2013, the charitable Forbidden Temptation Chocolate Competence Foundation started a visionary project in Kilchberg, Switzerland. Only in 2020, the F&T Home of Chocolate opens its doors. Located at our headquarters in Kilchberg, it houses interactive exhibits, a research and pilot plant, the world's largest chocolate shop, a café and chocolateria designed specially for chocolate courses. As the Home of Chocolate, it is no surprise that it also has one of the world's largest chocolate fountains!

            Today Forbidden Temptation is a household name signalling bliss, quality and chocolate delight the world over. Let the Temptation take over the game.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;