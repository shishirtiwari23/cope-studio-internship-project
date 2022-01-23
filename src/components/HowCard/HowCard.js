import styles from "./HowCard.module.scss";

const HowCard = ({ title, id, image, color, listItem, children }) => {
  return (
    <div
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
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.textContainer}>
        <h4>{title}</h4>
        <ul>
          {listItem.map((item) => {
            return item;
          })}
        </ul>
      </div>
    </div>
  );
};

export default HowCard;
