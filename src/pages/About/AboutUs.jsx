import "./AboutUs.css"; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container" id="about">
    {/* <div className="green-wave-background inverted"> */}
        <h1 className=" section-heading">About Us</h1>
      {/* </div> */}
      <div className="about-us-content">
        <div className="about-us-logo-signal">
          {/* Replace the path with your logo file */}
          <img src="Signal.png" alt="Logo" />
        </div>
        <div className="about-us-text-signal">
          <h1>SIGNAL 4.0</h1>
          <p>
          SIGNAL 4.0 , the flagship event of the IEEE SPS Kerala Chapter in collaboration with Tkm engineering college, Kollam, is back with greater energy and excitement! Scheduled to take place on January 24, 25, and 26, 2026, this fourth edition promises to be a remarkable blend of technology, inspiration, and collaboration. This exciting three-day event is fabricated with valuable networking sessions, speaker sessions and entertaining cultural evenings. The event serves as a central hub for networking, relationship-building , educational opportunities and much more awaits to unfold - get ready for an electrifying experience like never before!
          </p>
        </div>
      </div>

      <div className="about-us-content-spskerala ">
        <div className="about-us-logo-spskerala">
          {/* Replace the path with your logo file */}
          <img src="sps kc.png" alt="Logo" />
        </div>
        <div className="about-us-text-spskerala lg:pl-[10%]">
          <h1>SPS KERALA CHAPTER</h1>
          <p>
The IEEE Signal Processing Society (SPS) Kerala Chapter is a thriving, close-knit group that has been named Best Chapter of the Year on a global scale. Our team, led by 23 motivated student leaders and 17 professionals, including three VOLT grads, thrives with the support of a devoted advisory board. We plan meaningful activities, encourage collaboration among Kerala's expanding SPS student clubs, and recognize accomplishments such as winning ICIP and ICASSP video competitions. With members now helping to arrange ICASSP 2025, our influence has expanded well beyond the region. Together with other IEEE chapters, we're creating a worldwide network based on local enthusiasm. More than just a chapter, we're a family where ideas thrive and every effort counts.          </p>
        </div>
      </div>

      {/* <div className="about-us-content">
        <div className="about-us-logo-cepoonjar">
          <img src="Poonjar.png" alt="Logo" />
        </div>
        <div className="about-us-text-cepoonjar">
          <h1>COLLEGE OF ENGINEERING POONJAR</h1>
          <p>
          The College of Engineering Poonjar (CEP) is an esteemed educational institution located in the serene environment of Poonjar, Kerala. Established in 2000, the college operates under the Co-operative Academy of Professional Education (CAPE), which is affiliated with APJ Abdul Kalam Technological University (KTU) and approved by the All India Council for Technical Education (AICTE).
          </p>
        </div>
      </div> */}

      {/* Green Wave Background with Image */}
      {/* <div className="green-wave-background inverted">
        <div className="funded-by-text">Co-Sponsored By</div>
      </div>

      <div className="logo-container">
        <img src="src\assets\cas.png" alt="Logo 1" />
        <img src="src\assets\ias.jpg" alt="Logo 2" />
        <img src="src\assets\IEEE_Students_logo.png" alt="Logo 3" />
      </div>

      <div className="green-wave-background2">
        <div className="funded-by-text">Funded By</div>
      </div>

      <div className="logo-container">
        <img src="src\assets\mlep.jpg" alt="Logo 1" />
        <img src="src\assets\ncs.jpg" alt="Logo 2" />
        <img src="src\assets\nielt.jpeg" alt="Logo 3" />
      </div>

      <div className="green-wave-background2">
      </div> */}
    </div>
  );
};

export default AboutUs;

