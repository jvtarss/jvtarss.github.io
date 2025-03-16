
import React, { useEffect } from 'react';

const BioinformaticsBackground: React.FC = () => {
  useEffect(() => {
    // Create canvas elements and set up the animation
    const createBackground = () => {
      const canvas = document.getElementById('bioinfoBg') as HTMLCanvasElement;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Set canvas dimensions
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      
      // Particle system
      const particles: Particle[] = [];
      const connections: Connection[] = [];
      
      class Particle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        color: string;
        
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 2 + 1;
          this.speedX = (Math.random() - 0.5) * 0.5;
          this.speedY = (Math.random() - 0.5) * 0.5;
          
          // Color variations from bio-accent to white
          const colorRatio = Math.random();
          const r = Math.floor(144 + (255 - 144) * colorRatio);
          const g = Math.floor(255 + (255 - 255) * colorRatio);
          const b = Math.floor(52 + (255 - 52) * colorRatio);
          this.color = `rgba(${r}, ${g}, ${b}, ${0.1 + Math.random() * 0.4})`;
        }
        
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          
          if (this.x > canvas.width || this.x < 0) {
            this.speedX *= -1;
          }
          
          if (this.y > canvas.height || this.y < 0) {
            this.speedY *= -1;
          }
        }
        
        draw() {
          if (!ctx) return;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }
      }
      
      interface Connection {
        p1: Particle;
        p2: Particle;
        distance: number;
        opacity: number;
      }
      
      // Initialize particles
      const createParticles = () => {
        const particleCount = Math.min(Math.max(window.innerWidth, window.innerHeight) / 10, 150);
        
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle());
        }
      };
      
      // Function to calculate connections between particles
      const calculateConnections = () => {
        connections.length = 0;
        
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
              connections.push({
                p1: particles[i],
                p2: particles[j],
                distance,
                opacity: 1 - distance / 150
              });
            }
          }
        }
      };
      
      // Animation loop
      const animate = () => {
        if (!ctx) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw gradient background
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'rgba(0, 37, 34, 0.4)');
        gradient.addColorStop(1, 'rgba(0, 37, 34, 0.6)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });
        
        // Calculate and draw connections
        calculateConnections();
        connections.forEach(connection => {
          ctx.beginPath();
          ctx.moveTo(connection.p1.x, connection.p1.y);
          ctx.lineTo(connection.p2.x, connection.p2.y);
          ctx.strokeStyle = `rgba(144, 255, 52, ${connection.opacity * 0.2})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        });
        
        requestAnimationFrame(animate);
      };
      
      createParticles();
      animate();
      
      return () => {
        window.removeEventListener('resize', resizeCanvas);
      };
    };
    
    createBackground();
  }, []);
  
  return (
    <div className="fixed inset-0 w-full h-full z-0">
      <canvas 
        id="bioinfoBg" 
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bio-dark/70 to-bio-dark/90 z-1"></div>
    </div>
  );
};

export default BioinformaticsBackground;
