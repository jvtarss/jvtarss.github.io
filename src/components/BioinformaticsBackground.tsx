
import React, { useEffect } from 'react';

const BioinformaticsBackground: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById('dnaCanvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', setCanvasDimensions);
    setCanvasDimensions();

    // DNA properties
    const dnaStrands = 20;
    const baseColors = ['#46FF8C', '#FFFFFF'];
    const dnaData = Array(dnaStrands).fill(null).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: 0.5 + Math.random() * 1,
      length: 200 + Math.random() * 300,
      size: 2 + Math.random() * 2,
      angle: Math.random() * Math.PI * 2
    }));

    // Data points for statistical scatter
    const dataPoints = Array(100).fill(null).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 1 + Math.random() * 3,
      opacity: 0.1 + Math.random() * 0.5,
      speed: 0.2 + Math.random() * 0.5
    }));

    // Draw functions
    const drawDNA = () => {
      dnaData.forEach(strand => {
        const { x, y, length, size, angle } = strand;
        const steps = 30;
        const amplitude = 20;
        const frequency = 0.2;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);

        // Draw helixes
        for (let i = 0; i < 2; i++) {
          ctx.beginPath();
          for (let j = 0; j < steps; j++) {
            const t = j / steps;
            const xPos = j * (length / steps);
            const yPos = Math.sin(j * frequency + (i * Math.PI)) * amplitude;
            
            if (j === 0) {
              ctx.moveTo(xPos, yPos);
            } else {
              ctx.lineTo(xPos, yPos);
            }
          }
          ctx.strokeStyle = baseColors[i];
          ctx.lineWidth = size;
          ctx.globalAlpha = 0.3;
          ctx.stroke();
        }

        // Draw base pairs
        for (let j = 0; j < steps; j += 4) {
          const t = j / steps;
          const xPos = j * (length / steps);
          const yPos1 = Math.sin(j * frequency) * amplitude;
          const yPos2 = Math.sin(j * frequency + Math.PI) * amplitude;
          
          ctx.beginPath();
          ctx.moveTo(xPos, yPos1);
          ctx.lineTo(xPos, yPos2);
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = size / 2;
          ctx.globalAlpha = 0.2;
          ctx.stroke();
        }

        ctx.restore();
      });
    };

    const drawDataPoints = () => {
      dataPoints.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = '#46FF8C';
        ctx.globalAlpha = point.opacity;
        ctx.fill();
      });
    };

    const updatePositions = () => {
      dnaData.forEach(strand => {
        strand.y += strand.speed;
        if (strand.y > canvas.height + strand.length) {
          strand.y = -strand.length;
          strand.x = Math.random() * canvas.width;
        }
      });

      dataPoints.forEach(point => {
        point.y += point.speed;
        if (point.y > canvas.height) {
          point.y = 0;
          point.x = Math.random() * canvas.width;
        }
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDNA();
      drawDataPoints();
      updatePositions();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <canvas 
      id="dnaCanvas" 
      className="absolute top-0 left-0 w-full h-full z-0"
      style={{ opacity: 0.15 }}
    ></canvas>
  );
};

export default BioinformaticsBackground;
