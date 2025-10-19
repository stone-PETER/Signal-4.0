import WaveAnimation from "./WaveAnimation";

const Hero = () => {
  return (
    <section className="bg-[#0a0a1a] text-white">
      <div className="relative min-h-screen  overflow-hidden">
        {/*pt-[10dvh]*/}
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
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-cyan-400 opacity-80"
                >
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg> */}
                {/* <img className="h-[80px]" src="sps kc png.png"></img> */}
                <div>
                  <h2 className="md:text-xl text-center font-mono text-cyan-300 tracking-widest uppercase text-base">
                   <i>IEEE SPS Kerala Chapter Presents</i>
                  </h2>
                </div>
              </div>
              <div>
                <img src="Signal.png"></img>
              </div>

              {/* <h1 className="text-5xl xl:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-green-500">
                SIGNAL 3.0
              </h1> */}

              <p className="text-xl text-gray-300 leading-relaxed max-w-xl text-justify">
                SIGNAL 3.0 , the flagship event of the IEEE SPS Kerala Chapter,
                is back with greater energy and excitement! Scheduled to take
                place on January 24, 25, and 26, 2024, this third edition
                promises to be a remarkable blend of technology, inspiration,
                and collaboration.
              </p>

              <div className="flex items-center justify-center md:justify-start space-x-4 pt-6 ">
                <a href="https://www.yepdesk.com/signal-3-0" target="_blank"><button className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-green-600 hover:from-cyan-600 hover:to-green-700 transition-all duration-300 flex items-center">
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
                  Register Now
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-300/50 animate-ping group-hover:opacity-0 transition-opacity"></div>
                </button></a>

                {/* <button className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-full transition-all flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mr-2"
                  >
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  Our Process
                </button> */}
              </div>
              {/* <div className="flex items-center space-x-4 pt-8 opacity-70">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-purple-400"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span className="text-sm font-mono">
                  Compatible with 500+ Legacy Storage Technologies
                </span>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
