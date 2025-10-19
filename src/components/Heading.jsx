const Heading = ({ heading }) => {
    return (
      <div className="flex flex-col items-center my-6">
        <h2 className="font-RoverExplore text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide uppercase text-center">
          {heading}
        </h2>
      </div>
    );
  };
  
  export default Heading;
  