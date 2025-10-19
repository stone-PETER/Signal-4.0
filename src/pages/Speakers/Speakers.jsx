import React from 'react';
import './Speakers.css';
import wave from '../../assets/green wave 3.jpg';
import farhan from "../../assets/farhan.jpeg";
import abhinav from "../../assets/abhinav.jpeg";
import sunil from "../../assets/sunil.jpg";
import vishnu from "../../assets/vishnu.jpeg"

const Speakers = () => {
    const speakers = [
        { id: 1, name: 'Farhan Bin Fazil', job: 'CEO At Offenso Hackers Academy', image: farhan },
        { id: 2, name: 'Abhinav Rajeev', job: 'Director, Bumblebee Instruments Pvt. Ltd', image: abhinav },
        { id: 3, name: 'Dr Sunil T T', job: 'Director, ICFOSS, Trivandrum', image: sunil },
        { id: 4, name: 'Vishnu Prasad M V', job: 'CSR Manager and Senior HR Manager, Srishti Innovative', image: vishnu },
    ];

    return (
        <div className="speakers-section">
            <div className="green-wave-container">
                    <img src={wave} alt="Wave" className="green-wave" />
                    <h2 className="workshop-heading">Speakers</h2>
                    <span className="loaderUpdate"></span>
                  </div>
            <div className="speakers-container">
                {speakers.map((speaker) => (
                    <div key={speaker.id} className="speakers-card">
                        <div className="speaker-image-container">
                            <img src={speaker.image} alt={speaker.name} className="speaker-image" />
                        </div>
                        <h3 className="speaker-name">{speaker.name}</h3>
                        <p className="speaker-job">{speaker.job}</p>
                    </div>
                ))}
            </div>
             <img
                    src={wave}
                    alt="Green Wave"
                    className="green-wave-btm"
                  />
        </div>
    );
};

export default Speakers;
