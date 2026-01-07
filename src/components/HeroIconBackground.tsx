import { motion } from "framer-motion";

const ICONS = [
  { src: "/icons/react.png", label: "React" },
  { src: "/icons/js.png", label: "JavaScript" },
  { src: "/icons/node.png", label: "Node.js" },
  { src: "/icons/python.png", label: "Python" },
  { src: "/icons/sql.png", label: "SQL" },
  { src: "/icons/powerbi.png", label: "Power BI" },

  // ✅ Newly added (from your images)
  { src: "/icons/business-intelligence.png", label: "Business Intelligence" },
  { src: "/icons/excel.png", label: "Excel" },
  { src: "/icons/analysis.png", label: "Data Analysis" },
  { src: "/icons/data-visualization.png", label: "Data Visualization" },
];

export default function HeroIconBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {ICONS.map((icon, i) => (
        <motion.div
          key={icon.label}
          className="absolute flex flex-col items-center gap-2"
          style={{
            left: `${10 + (i % 5) * 18}%`,
            top: `${18 + Math.floor(i / 5) * 30}%`,
          }}
          animate={{
            y: [0, -25, 0],
            rotateX: [0, 10, 0],
            rotateY: [0, -10, 0],
          }}
          transition={{
            duration: 6 + i * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Icon */}
          <img
            src={icon.src}
            alt={icon.label}
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 opacity-80"
          />

          {/* Label */}
          <span className="text-[11px] md:text-xs text-muted-foreground opacity-65 tracking-wide">
            {icon.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
