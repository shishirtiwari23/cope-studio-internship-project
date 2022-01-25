import styles from "./WhyCard.module.scss";
import { motion } from "framer-motion";

const WhyCard = ({ description, serialNo, color, image, children }) => {
  return (
    <motion.div
      transition={{ duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] }}
      initial={{ boxShadow: `2px 2px 0px 5px ${color}` }}
      whileHover={{ boxShadow: `10px 10px 0px 5px ${color}` }}
      className={styles.container}
    >
      <div className={styles.textContainer}>
        <h4 style={{ backgroundColor: color }}>No. {serialNo}</h4>
        <h4>{children}</h4>
        <p>{description}</p>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt="SideImage" />
      </div>
    </motion.div>
  );
};

export default WhyCard;
