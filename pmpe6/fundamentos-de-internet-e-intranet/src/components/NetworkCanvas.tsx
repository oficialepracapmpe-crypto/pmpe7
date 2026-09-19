import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: "y" | "c";
}

const PALETTES = {
  warm: { a: "rgba(253, 224, 71, 0.85)", b: "rgba(165, 243, 252, 0.65)" },
  cool: { a: "rgba(253, 164, 175, 0.9)", b: "rgba(125, 211, 252, 0.7)" },
  fresh: { a: "rgba(196, 181, 253, 0.9)", b: "rgba(110, 231, 183, 0.7)" },
  azure: { a: "rgba(147, 197, 253, 0.9)", b: "rgba(125, 211, 252, 0.7)" },
  leaf: { a: "rgba(110, 231, 183, 0.9)", b: "rgba(163, 230, 53, 0.6)" },
  ember: { a: "rgba(253, 186, 116, 0.95)", b: "rgba(248, 113, 113, 0.65)" },
  teal: { a: "rgba(94, 234, 212, 0.9)", b: "rgba(45, 212, 191, 0.6)" },
  lime: { a: "rgba(190, 242, 100, 0.9)", b: "rgba(74, 222, 128, 0.6)" },
  rose: { a: "rgba(251, 113, 133, 0.9)", b: "rgba(251, 146, 60, 0.6)" },
};

export default function NetworkCanvas({
  className = "",
  variant = "warm",
}: {
  className?: string;
  variant?: "warm" | "cool" | "fresh" | "azure" | "leaf" | "ember" | "teal" | "lime" | "rose";
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let nodes: Node[] = [];
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(90, Math.floor((w * h) / 16000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
        hue: Math.random() > 0.72 ? "y" : "c",
      }));
    };

    const LINK = 130;

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        // leve atração pelo mouse
        const dx = mouse.current.x - n.x;
        const dy = mouse.current.y - n.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 24000) {
          n.vx += dx * 0.000012;
          n.vy += dy * 0.000012;
        }
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            const alpha = (1 - d / LINK) * 0.28;
            ctx.strokeStyle = `rgba(244, 241, 234, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      const pal = PALETTES[variant];
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.hue === "y" ? pal.a : pal.b;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => (mouse.current = { x: -9999, y: -9999 });

    resize();
    tick();
    window.addEventListener("resize", resize);
    canvas.parentElement?.addEventListener("pointermove", onMove);
    canvas.parentElement?.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.parentElement?.removeEventListener("pointermove", onMove);
      canvas.parentElement?.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden />;
}
