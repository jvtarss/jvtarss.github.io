
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
    const dnaStrands = 25; // Increased number of strands
    const baseColors = ['#46FF8C', '#FFFFFF'];
    const dnaData = Array(dnaStrands).fill(null).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: 0.3 + Math.random() * 1.2, // More variable speeds
      length: 180 + Math.random() * 320, // More variable lengths
      size: 1.8 + Math.random() * 2.5, // Slightly thicker for better visibility
      angle: Math.random() * Math.PI * 2,
      opacity: 0.2 + Math.random() * 0.4 // Added random opacity
    }));

    // Data points for statistical scatter
    const dataPoints = Array(120).fill(null).map(() => ({ // More data points
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 0.8 + Math.random() * 3.5, // More variable sizes
      opacity: 0.1 + Math.random() * 0.6, // More variable opacity
      speed: 0.15 + Math.random() * 0.6, // More variable speeds
      pulseSpeed: 0.01 + Math.random() * 0.03, // For pulsing effect
      pulseDirection: Math.random() > 0.5 ? 1 : -1, // Direction of pulse
      pulseValue: Math.random() // Starting point for pulse
    }));

    // Draw functions
    const drawDNA = () => {
      dnaData.forEach(strand => {
        const { x, y, length, size, angle, opacity } = strand;
        const steps = 40; // More steps for smoother curves
        const amplitude = 18 + Math.random() * 4; // Slightly variable amplitude
        const frequency = 0.18 + Math.random() * 0.05; // Slightly variable frequency

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
          ctx.globalAlpha = opacity; // Use the strand's opacity
          ctx.stroke();
        }

        // Draw base pairs
        for (let j = 0; j < steps; j += 4) {
          const xPos = j * (length / steps);
          const yPos1 = Math.sin(j * frequency) * amplitude;
          const yPos2 = Math.sin(j * frequency + Math.PI) * amplitude;
          
          ctx.beginPath();
          ctx.moveTo(xPos, yPos1);
          ctx.lineTo(xPos, yPos2);
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = size / 2;
          ctx.globalAlpha = opacity * 0.8; // Slightly less opaque than strands
          ctx.stroke();
        }

        ctx.restore();
      });
    };

    const drawDataPoints = () => {
      dataPoints.forEach(point => {
        // Update pulse value for pulsing effect
        point.pulseValue += point.pulseSpeed * point.pulseDirection;
        if (point.pulseValue > 1 || point.pulseValue < 0) {
          point.pulseDirection *= -1; // Reverse direction
        }
        
        // Calculate size with pulse
        const pulseSize = point.size * (0.7 + 0.5 * point.pulseValue);
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = '#46FF8C';
        ctx.globalAlpha = point.opacity * (0.7 + 0.3 * point.pulseValue);
        ctx.fill();
      });
    };

    const updatePositions = () => {
      dnaData.forEach(strand => {
        strand.y += strand.speed;
        if (strand.y > canvas.height + strand.length) {
          strand.y = -strand.length;
          strand.x = Math.random() * canvas.width;
          // Randomize properties for more variance when recycling
          strand.speed = 0.3 + Math.random() * 1.2;
          strand.size = 1.8 + Math.random() * 2.5;
          strand.opacity = 0.2 + Math.random() * 0.4;
        }
      });

      dataPoints.forEach(point => {
        point.y += point.speed;
        if (point.y > canvas.height) {
          point.y = 0;
          point.x = Math.random() * canvas.width;
          // Randomize properties for more variance when recycling
          point.size = 0.8 + Math.random() * 3.5;
          point.opacity = 0.1 + Math.random() * 0.6;
          point.speed = 0.15 + Math.random() * 0.6;
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
