import { motion } from "framer-motion";

const icons = [
  "/icons/react.png",
  "/icons/js.png",
  "/icons/node.png",
  "/icons/python.png",
  "/icons/sql.png",
  "/icons/powerbi.png",
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="grid grid-cols-3 gap-6">
        {icons.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            className="w-16 h-16 md:w-20 md:h-20 rounded-xl shadow-2xl"
            initial={{ y: 0, rotateX: 0, rotateY: 0 }}
            animate={{
              y: [0, -10, 0],
              rotateX: [0, 10, 0],
              rotateY: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
