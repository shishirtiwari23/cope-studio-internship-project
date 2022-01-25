import { motion } from "framer-motion";
import styles from "./Gradient.module.scss";

const Gradient = ({ c1, c2, id }) => {
  return (
    <div className={styles.container}>
      <svg width={350} height={150} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <motion.radialGradient
            id={"gradient" + id}
            fr={0.2}
            fx={0.32}
            fy={0.32}
            r={0.7}
            animate={{ fr: 0.05, fx: 0.2, fy: 0.35, r: 0.6 }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              duration: 3,
            }}
          >
            <stop offset="0%" stopColor={c1} />
            <stop offset="100%" stopColor={c2} />
          </motion.radialGradient>
        </defs>

        <motion.circle
          fill={"url(#gradient" + id + ")"}
          cx={100}
          cy={100}
          r={100}
          animate={{ cx: [null, 100, 200] }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            duration: 3,
          }}
        />
      </svg>
    </div>
  );
};
export default Gradient;
