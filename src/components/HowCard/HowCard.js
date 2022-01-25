import styles from "./HowCard.module.scss";
import { motion } from "framer-motion";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

const HowCard = ({ title, id, image, color, listItem, children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => {
        setToggle(true);
      }}
    >
      <motion.div
        transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] }}
        initial={{ x: id % 2 === 0 ? -1000 : 1000 }}
        animate={{ x: toggle ? 0 : id % 2 === 0 ? -1000 : 1000 }}
        style={
          id % 2 === 0
            ? {
                display: "flex",
                flexDirection: "row-reverse",
                backgroundColor: color,
                marginLeft: "-60%",
              }
            : { display: "flex", backgroundColor: color, marginRight: "-60%" }
        }
        className={styles.container}
      >
        <div className={styles.imageContainer}>{image}</div>
        <div className={styles.textContainer}>
          <h4>{title}</h4>
          <ul>{listItem}</ul>
        </div>
        {children}
      </motion.div>
    </ScrollTrigger>
  );
};

export default HowCard;
