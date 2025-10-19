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
          <h1>SIGNAL 3.0</h1>
          <p>
          SIGNAL 3.0 , the flagship event of the IEEE SPS Kerala Chapter in collaboration with College of Engineering, Poonjar, is back with greater energy and excitement! Scheduled to take place on January 24, 25, and 26, 2024, this third edition promises to be a remarkable blend of technology, inspiration, and collaboration. This exciting three-day event is fabricated with valuable networking sessions, speaker sessions and entertaining cultural evenings. The event serves as a central hub for networking, relationship-building , educational opportunities and much more awaits to unfold - get ready for an electrifying experience like never before!
          </p>
        </div>
      </div>

      <div className="about-us-content-spskerala">
        <div className="about-us-logo-spskerala">
          {/* Replace the path with your logo file */}
          <img src="sps kc png.png" alt="Logo" />
        </div>
        <div className="about-us-text-spskerala">
          <h1>SPS KERALA CHAPTER</h1>
          <p>
          The IEEE Signal Processing Society Kerala Chapter is a lively, close-knit community, honored globally as the Best Chapter of the Year among all IEEE SPS branches worldwide. Our team includes 23 dedicated student leaders and 17 seasoned professionals—three of them VOLT graduates—all working under the guidance of an advisory body that brings clarity and direction to our vision. Together, we shape every event with purpose and creativity, striving to leave a genuine impact on this beautiful world, driven by something so uniquely human. Working hand in hand with other IEEE section chapters, we are building a network that reaches from the grassroots of Kerala to the world. Our chapter is more than a community—it’s a place where ideas flourish, people engage, and every endeavor holds a lasting purpose.
          </p>
        </div>
      </div>

      <div className="about-us-content">
        <div className="about-us-logo-cepoonjar">
          {/* Replace the path with your logo file */}
          <img src="Poonjar.png" alt="Logo" />
        </div>
        <div className="about-us-text-cepoonjar">
          <h1>COLLEGE OF ENGINEERING POONJAR</h1>
          <p>
          The College of Engineering Poonjar (CEP) is an esteemed educational institution located in the serene environment of Poonjar, Kerala. Established in 2000, the college operates under the Co-operative Academy of Professional Education (CAPE), which is affiliated with APJ Abdul Kalam Technological University (KTU) and approved by the All India Council for Technical Education (AICTE).
          </p>
        </div>
      </div>

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

