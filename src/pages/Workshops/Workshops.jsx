import React from "react";
import wave from "../../assets/green wave 3.jpg";

import "./Workshops.css"; 
const workshopsData = [
    {
      name: "GEN AI",
      description: (
        <>
          Join us for an exclusive workshop on{" "} <strong>Gen AI</strong>, led by the brilliant{" "}
          <strong>Pranavkrishna Vadhyar</strong>, AI Developer at DifferentByte
          and ML Engineer. This session offers a deep dive into the principles
          and applications of Generative AI, featuring live coding, interactive
          demos, and expert insights. Discover how models like GPT and DALL·E are
          transforming industries and gain hands-on experience to build your own
          generative models. Perfect for AI enthusiasts, developers, and
          professionals eager to upskill in AI.
        </>
      ),
    },
    {
      name: "AI & Ethical Hacking",
      description: (
        <>
          Join us on {" "}<strong>January 25 </strong>for an electrifying workshop on {" "}<strong>AI and Ethical Hacking</strong>, led by {" "}<strong>Farhan Bin Fazil</strong>, Co-founder & CEO of Offenso Hackers Academy. Dive into the fascinating intersection of artificial intelligence and cybersecurity with live demos, expert insights, and hands-on learning. Perfect for tech enthusiasts eager to explore cutting-edge innovation and the art of ethical hacking to secure the future!
        </>
      ),
    },
    {
      name: "Exploring Software Defined Radio",
      description: (
       <>
       Join us for Signal 3.0, our third workshop, {" "}<strong>Exploring Software Defined Radio (SDR)</strong>. This session dives into SDR fundamentals, modern communication applications, and future advancements. Led by {" "}<strong>Dr. Sunil T T</strong>, Director of ICFOSS and a visionary in communication systems, the workshop promises valuable insights and hands-on experience.
       </>
      ),
    },
  {
      name: "Campus to Corporate Training",
      description: (
       <>
       Join us for the {" "}<strong>Campus to Corporate Training</strong> session with {" "}<strong>Vishnu Prasad M V</strong>, Senior HR Manager at Srishti Innovative. Part of SIGNAL 3.0, this session will help you transition smoothly from academics to the professional world, providing valuable tips and insights.
       </>
      ),
    },
  // Add more workshops as needed
];

const Workshops = () => {
  return (
    <div className="workshops-container">
      <div className="wave-container">
        <img src={wave} alt="Wave" className="wave-image" />
        <h2 className="workshop-heading">Workshops</h2>
        <span className="loader"></span>
      </div>
      <div className="workshops">
     
        {workshopsData.map((workshop, index) => (
          <div key={index} className="workshop-card">
            <div className="workshop-card-inner">
              <div className="workshop-card-front">
                <h1 className="workshopName">{workshop.name}</h1>
              </div>
              <div className="workshop-card-back">
                <h4 className="workshop-topic">Description</h4>
                <p className="workshop-description">{workshop.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="wavegif">

      </div>
    </div>
  );
};

export default Workshops;
