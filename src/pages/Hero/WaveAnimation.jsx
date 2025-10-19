import { useEffect, useRef } from "react";

const WaveAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let lines = [];
    const lineCount = 10;
    const waveHeight = 30;
    const waveWidth = 1200;
    const speed = 0.005;
    let animationProgress = 3;

    const waveConfig = {
      verticalOffset: 200,
      verticalSpread: 100,
      centeringFactor: 0.5,
      setVerticalPosition: function (offset) {
        this.verticalOffset = offset;
      },
    };

    function initializeWaves() {
      lines = [];
      for (let i = 0; i < lineCount; i++) {
        const baseVerticalOffset =
          (i - (lineCount - 1) * waveConfig.centeringFactor) *
          waveConfig.verticalSpread;
        lines.push({
          frequency: 0.015 + i * 0.005,
          amplitude: waveHeight - i * 10,
          phase: (i * Math.PI) / 200,
          verticalOffset: baseVerticalOffset + waveConfig.verticalOffset,
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animationProgress += speed;

      lines.forEach((line, index) => {
        const gradient = ctx.createLinearGradient(0, 0, waveWidth, 0);
        gradient.addColorStop(0, `rgba(138, 103, 187, ${0.7 - index * 0.1})`);
        gradient.addColorStop(1, `rgba(138, 103, 187, ${0.1 - index * 0.03})`);

        ctx.beginPath();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = gradient;

        for (let x = 0; x <= waveWidth; x += 2) {
          const mergeMultiplier = 1 - (x / waveWidth) * 0.8;
          const yOffset =
            line.verticalOffset * mergeMultiplier * (x / waveWidth);
          const y =
            canvas.height / 2 +
            yOffset +
            Math.sin(x * line.frequency + animationProgress + line.phase) *
              (line.amplitude * mergeMultiplier);
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();

        const dotX = waveWidth * ((animationProgress + line.phase) % 1);
        const mergeMultiplier = 1 - (dotX / waveWidth) * 0.8;
        const yOffset =
          line.verticalOffset * mergeMultiplier * (dotX / waveWidth);
        const dotY =
          canvas.height / 2 +
          yOffset +
          Math.sin(dotX * line.frequency + animationProgress + line.phase) *
            (line.amplitude * mergeMultiplier);

        ctx.beginPath();
        ctx.arc(dotX, dotY, 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(80, 162, 171, ${0.5 * mergeMultiplier})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeWaves();
    }

    function initWaveAnimation() {
      window.addEventListener("resize", resizeCanvas);
      resizeCanvas();
      animate();
    }

    const waveControls = {
      moveUp: function (amount = 50) {
        waveConfig.setVerticalPosition(waveConfig.verticalOffset - amount);
        initializeWaves();
      },
      moveDown: function (amount = 50) {
        waveConfig.setVerticalPosition(waveConfig.verticalOffset + amount);
        initializeWaves();
      },
      reset: function () {
        waveConfig.setVerticalPosition(0);
        initializeWaves();
      },
      setCenteringFactor: function (factor = 0.5) {
        waveConfig.centeringFactor = Math.max(0, Math.min(1, factor));
        initializeWaves();
      },
    };

    waveControls.moveDown(200);
    initWaveAnimation();

    window.waveControls = waveControls;

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default WaveAnimation;
