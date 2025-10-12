import { useEffect, useRef } from "react";

function MouseSmoke() {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set up full-screen canvas
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const addParticle = (x, y) => {
      particles.current.push({
        x,
        y,
        alpha: 1,
        size: Math.random() * 20 + 10,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 1.5) * 1.5,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.01;
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        gradient.addColorStop(0, `rgba(200,200,200,${p.alpha})`);
        gradient.addColorStop(1, `rgba(200,200,200,0)`);
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Remove old particles
      particles.current = particles.current.filter((p) => p.alpha > 0);
      requestAnimationFrame(draw);
    };
    draw();

    const handleMove = (e) => addParticle(e.clientX, e.clientY);
    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none", // don't block clicks
        zIndex: 1000,
      }}
    />
  );
}

export default MouseSmoke;
