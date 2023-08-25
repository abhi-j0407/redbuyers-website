import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="left">
          <div className="content">
            <h1>Get an Instant offer and sell your home</h1>
            <form action="#" className="offer-form">
              <img src="/assets/homepage/map.svg" alt="map" />
              <input
                type="text"
                placeholder="Where's your house?"
                className="input"
              />
              <button type="submit">Get my free offer</button>
            </form>
            <p>Receive an offer within 24 hours, it&apos;s that simple!</p>
          </div>
        </div>
        <div className="right">
          <img src="/public/assets/homepage/Hero.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
