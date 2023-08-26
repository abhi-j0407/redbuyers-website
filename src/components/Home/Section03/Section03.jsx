import './Section03.css'
import Offer from './../Offer/Offer';

const Section03 = () => {
  return (
    <div id="section03">
      <div className="container">
        <div className="content">
          <h3>Enter you home details and</h3>
          <h2>Get an instant offer.</h2>
          <p>Within 24 hours!</p>
          <Offer />
        </div>
      </div>
    </div>
  )
}

export default Section03