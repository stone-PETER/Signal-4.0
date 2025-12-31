import { motion } from "framer-motion";
import "./ComicImpact.css";

const ComicBubble = ({ x, y, word, rotation }) => {
  return (
    <motion.div
      className="comic-bubble"
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ scale: 0, rotate: rotation }}
      animate={{
        scale: [0, 1.2, 1.0],
        rotate: rotation,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
    >
      <svg
        width="120"
        height="80"
        viewBox="0 0 120 80"
        xmlns="http://www.w3.org/2000/svg"
        className="comic-bubble-svg"
      >
        {/* Starburst background shape */}
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="2" dy="2" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="comicGradient" cx="50%" cy="50%" r="50%">
            <stop
              offset="0%"
              style={{ stopColor: "#FFD700", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#FF4500", stopOpacity: 1 }}
            />
          </radialGradient>
        </defs>

        {/* Starburst shape */}
        <path
          d="M60,10 L65,35 L90,35 L70,50 L78,75 L60,60 L42,75 L50,50 L30,35 L55,35 Z"
          fill="url(#comicGradient)"
          stroke="#000000"
          strokeWidth="4"
          filter="url(#shadow)"
        />

        {/* Text */}
        <text
          x="60"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"
          className="comic-text"
        >
          {word}
        </text>
      </svg>

      {/* Additional comic effect lines */}
      <div className="comic-lines">
        <div className="comic-line line-1"></div>
        <div className="comic-line line-2"></div>
        <div className="comic-line line-3"></div>
        <div className="comic-line line-4"></div>
      </div>
    </motion.div>
  );
};

export default ComicBubble;
