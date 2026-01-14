import WaveAnimation from "./WaveAnimation";

const Hero = () => {
  return (
    <section className="bg-[#0a0a1a] text-white pt-[10dvh]">
      <div className="relative min-h-screen  overflow-hidden">
        {/*pt-[10dvh]*/}
        {/* Black Panther Hero Background */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            // backgroundImage: "url(/assets/superheroes/black-panther.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            opacity: 0.35,
            filter: "brightness(1.1) contrast(1.2)",
          }}
        ></div>
        <canvas
          id="waveCanvas"
          className="absolute inset-0 w-full h-full opacity-80 z-0"
        ></canvas>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-10">
          <WaveAnimation />
        </div>
        <div className="absolute z-10"></div>

        <div className="relative z-20 container mx-auto px-6 lg:px-12 pt-24 pb-16 lg:pl-[20%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                <div>
                  <h2 className="md:text-xl text-center font-mono text-cyan-300 tracking-widest uppercase text-base">
                    <i>IEEE SPS Kerala Chapter Presents</i>
                  </h2>
                </div>
              </div>
              <div>
                <img src="Signal.png"></img>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed max-w-xl text-justify">
                SIGNAL 4.0 , the flagship event of the IEEE SPS Kerala Chapter,
                is back with greater energy and excitement! Scheduled to take
                place on January 24, 25, and 26, 2026, this fourth edition
                promises to be a remarkable blend of technology, inspiration,
                and collaboration.
              </p>

              <div className="flex items-center justify-center md:justify-start space-x-4 pt-6 ">
                <a href="#about" target="_blank">
                  <button className="hero-btn group relative px-8 py-3 rounded-full transition-all duration-300 flex items-center font-bold text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="mr-2 group-hover:animate-pulse"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
