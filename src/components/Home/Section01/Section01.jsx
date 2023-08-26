import "./Section01.css";

const steps = [
  {
    id: "1",
    title: "Request for an offer",
    content:
      "Fill in your property details and get an instant preliminary home value.",
  },
  {
    id: "2",
    title: "Schedule an appointment",
    content:
      "Show us your home in-person or virtually and get our offer within 24 hours of the appointment.",
  },
  {
    id: "3",
    title: "Sell your house",
    content:
      "Have complete control over your decision. Either accept our offer or list with us. ",
  },
];

const Section01 = () => {
  return (
    <div id="section01">
      <div className="container">
        <h2>Let&apos;s See How it Works</h2>
        <p>Here&apos;s how we make it easier to sell your home</p>
        <div className="content">
          <div className="left">
            <img src="/assets/homepage/Image.jpg" alt="home-works" />
          </div>
          <div className="right">
            <div className="steps">
              <img src="/assets/homepage/Pointer Lines.svg" alt="pointer_line" className="line" />
              {steps.map((step) => (
                <div className="step" key={step.id}>
                  <div className="text">
                    <p>Step {step.id}</p>
                    <h3>{step.title}</h3>
                    <p>{step.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section01;
