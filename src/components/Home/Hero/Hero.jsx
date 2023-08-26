import "./Hero.css";
import Offer from "../Offer/Offer";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="left">
          <div className="content">
            <h1>Get an Instant offer and sell your home</h1>
            <Offer />
            <p>Receive an offer within 24 hours, it&apos;s that simple!</p>
          </div>
        </div>
        <div className="right">
          <img src="/assets/homepage/Hero.svg" alt="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
