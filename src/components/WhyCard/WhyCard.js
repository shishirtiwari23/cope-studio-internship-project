import styles from "./WhyCard.module.scss";

const WhyCard = ({ description, serialNo, color, image, children }) => {
  return (
    <div
      style={{ boxShadow: "10px 10px 0px 5px" + color }}
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
    </div>
  );
};

export default WhyCard;
