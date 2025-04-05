
import React, { useEffect, useRef } from 'react';

const BioinformaticsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      // Re-create triangles when resizing
      createTriangles();
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Mouse position tracking
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    
    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Triangle class
    interface Triangle {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      x3: number;
      y3: number;
      color: string;
      initialX1: number;
      initialY1: number;
      initialX2: number;
      initialY2: number;
      initialX3: number;
      initialY3: number;
      originalColor: string;
      highlightColor: string;
      draw: () => void;
      update: () => void;
    }
    
    const triangles: Triangle[] = [];
    
    // Create triangles
    const createTriangles = () => {
      triangles.length = 0;
      
      const gridSize = Math.min(100, width / 10);
      const cols = Math.ceil(width / gridSize) + 1;
      const rows = Math.ceil(height / gridSize) + 1;
      
      // Use the bio-accent color palette
      const baseColors = ['rgba(70, 208, 164, 0.1)', 'rgba(4, 16, 16, 0.2)', 'rgba(144, 255, 52, 0.1)'];
      const highlightColors = ['rgba(70, 208, 164, 0.4)', 'rgba(4, 16, 16, 0.3)', 'rgba(144, 255, 52, 0.3)'];
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          // Create two triangles for each grid cell (to form a square)
          const x = i * gridSize;
          const y = j * gridSize;
          
          const colorIndex = Math.floor(Math.random() * baseColors.length);
          const baseColor = baseColors[colorIndex];
          const highlightColor = highlightColors[colorIndex];
          
          // First triangle (top-left to bottom-right)
          triangles.push({
            x1: x,
            y1: y,
            x2: x + gridSize,
            y2: y,
            x3: x + gridSize,
            y3: y + gridSize,
            color: baseColor,
            initialX1: x,
            initialY1: y,
            initialX2: x + gridSize,
            initialY2: y,
            initialX3: x + gridSize,
            initialY3: y + gridSize,
            originalColor: baseColor,
            highlightColor,
            
            draw() {
              if (!ctx) return;
              ctx.beginPath();
              ctx.moveTo(this.x1, this.y1);
              ctx.lineTo(this.x2, this.y2);
              ctx.lineTo(this.x3, this.y3);
              ctx.closePath();
              ctx.fillStyle = this.color;
              ctx.fill();
            },
            
            update() {
              // Calculate distance from mouse
              const centerX = (this.x1 + this.x2 + this.x3) / 3;
              const centerY = (this.y1 + this.y2 + this.y3) / 3;
              const dx = mouseX - centerX;
              const dy = mouseY - centerY;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              // Interactive effect: distort triangles near cursor
              const influenceRadius = 200;
              
              if (distance < influenceRadius) {
                // Change color based on proximity to mouse
                const colorIntensity = 1 - distance / influenceRadius;
                this.color = this.highlightColor;
                
                // Move vertices away from mouse
                const pushStrength = 20 * colorIntensity;
                const pushX = (dx / distance) * pushStrength;
                const pushY = (dy / distance) * pushStrength;
                
                // Apply distortion to vertices
                this.x1 = this.initialX1 - pushX * (1 - distance / influenceRadius);
                this.y1 = this.initialY1 - pushY * (1 - distance / influenceRadius);
                this.x2 = this.initialX2 - pushX * (1 - distance / influenceRadius);
                this.y2 = this.initialY2 - pushY * (1 - distance / influenceRadius);
                this.x3 = this.initialX3 - pushX * (1 - distance / influenceRadius);
                this.y3 = this.initialY3 - pushY * (1 - distance / influenceRadius);
              } else {
                // Reset to original state
                this.color = this.originalColor;
                this.x1 = this.initialX1;
                this.y1 = this.initialY1;
                this.x2 = this.initialX2;
                this.y2 = this.initialY2;
                this.x3 = this.initialX3;
                this.y3 = this.initialY3;
              }
            }
          });
          
          // Second triangle (top-left to bottom-right)
          triangles.push({
            x1: x,
            y1: y,
            x2: x,
            y2: y + gridSize,
            x3: x + gridSize,
            y3: y + gridSize,
            color: baseColor,
            initialX1: x,
            initialY1: y,
            initialX2: x,
            initialY2: y + gridSize,
            initialX3: x + gridSize,
            initialY3: y + gridSize,
            originalColor: baseColor,
            highlightColor,
            
            draw() {
              if (!ctx) return;
              ctx.beginPath();
              ctx.moveTo(this.x1, this.y1);
              ctx.lineTo(this.x2, this.y2);
              ctx.lineTo(this.x3, this.y3);
              ctx.closePath();
              ctx.fillStyle = this.color;
              ctx.fill();
            },
            
            update() {
              // Calculate distance from mouse
              const centerX = (this.x1 + this.x2 + this.x3) / 3;
              const centerY = (this.y1 + this.y2 + this.y3) / 3;
              const dx = mouseX - centerX;
              const dy = mouseY - centerY;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              // Interactive effect: distort triangles near cursor
              const influenceRadius = 200;
              
              if (distance < influenceRadius) {
                // Change color based on proximity to mouse
                const colorIntensity = 1 - distance / influenceRadius;
                this.color = this.highlightColor;
                
                // Move vertices away from mouse
                const pushStrength = 20 * colorIntensity;
                const pushX = (dx / distance) * pushStrength;
                const pushY = (dy / distance) * pushStrength;
                
                // Apply distortion to vertices
                this.x1 = this.initialX1 - pushX * (1 - distance / influenceRadius);
                this.y1 = this.initialY1 - pushY * (1 - distance / influenceRadius);
                this.x2 = this.initialX2 - pushX * (1 - distance / influenceRadius);
                this.y2 = this.initialY2 - pushY * (1 - distance / influenceRadius);
                this.x3 = this.initialX3 - pushX * (1 - distance / influenceRadius);
                this.y3 = this.initialY3 - pushY * (1 - distance / influenceRadius);
              } else {
                // Reset to original state
                this.color = this.originalColor;
                this.x1 = this.initialX1;
                this.y1 = this.initialY1;
                this.x2 = this.initialX2;
                this.y2 = this.initialY2;
                this.x3 = this.initialX3;
                this.y3 = this.initialY3;
              }
            }
          });
        }
      }
    };
    
    createTriangles();
    
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      // Smooth mouse movement
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, 'rgba(0, 37, 34, 0.9)');
      gradient.addColorStop(1, 'rgba(0, 37, 34, 1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // Update and draw triangles
      triangles.forEach(triangle => {
        triangle.update();
        triangle.draw();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 w-full h-full z-0">
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bio-dark/10 to-bio-dark/30 z-1"></div>
    </div>
  );
};

export default BioinformaticsBackground;
