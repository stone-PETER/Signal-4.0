import WaveAnimation from "./WaveAnimation";

const Hero = () => {
  return (
    <section className="bg-mcu-black text-white pt-[10dvh]">
      <div className="relative min-h-screen overflow-hidden">
        {/*pt-[10dvh]*/}
        <canvas
          id="waveCanvas"
          className="absolute inset-0 w-full h-full opacity-30 z-0"
        ></canvas>
        <div className="absolute inset-0 bg-gradient-to-b from-mcu-black via-transparent to-mcu-charcoal z-10">
          <WaveAnimation />
        </div>
        {/* MCU-style red accent lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mcu-red to-transparent z-30 shadow-[0_0_20px_rgba(220,20,60,0.8)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mcu-red to-transparent z-30 shadow-[0_0_20px_rgba(220,20,60,0.8)]"></div>

        <div className="relative z-20 container mx-auto px-6 lg:px-12 pt-24 pb-16 lg:pl-[20%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-full">
                  <h2 className="md:text-xl text-center font-mono text-mcu-red tracking-[0.3em] uppercase text-base font-bold mcu-glow-text">
                    <i>IEEE SPS Kerala Chapter Presents</i>
                  </h2>
                </div>
              </div>
              <div className="relative">
                <img
                  src="Signal.png"
                  className="drop-shadow-[0_0_30px_rgba(220,20,60,0.5)] transition-all duration-300 hover:drop-shadow-[0_0_50px_rgba(220,20,60,0.8)]"
                  alt="SIGNAL 4.0"
                />
                {/* MCU-style corner accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-mcu-red"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-mcu-red"></div>
              </div>

              <p className="text-xl text-mcu-light-gray leading-relaxed max-w-xl text-justify font-light">
                SIGNAL 4.0, the flagship event of the IEEE SPS Kerala Chapter,
                is back with greater energy and excitement! Scheduled to take
                place on January 24, 25, and 26, 2026, this fourth edition
                promises to be a remarkable blend of technology, inspiration,
                and collaboration.
              </p>

              <div className="flex items-center justify-center md:justify-start space-x-4 pt-6">
                <a href="#about" target="_blank">
                  <button className="group relative px-8 py-4 rounded bg-gradient-to-r from-mcu-red-dark via-mcu-red to-mcu-red-dark hover:from-mcu-red hover:via-mcu-red-light hover:to-mcu-red transition-all duration-300 flex items-center font-bold tracking-wider uppercase border-2 border-mcu-red-light shadow-[0_0_20px_rgba(220,20,60,0.5)] hover:shadow-[0_0_30px_rgba(220,20,60,0.8)]">
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
