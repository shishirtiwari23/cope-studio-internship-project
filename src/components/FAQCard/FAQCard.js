import styles from "./FAQCard.module.scss";

const FAQCard = ({ title, answer, color }) => {
  return (
    <div
      style={{ boxShadow: "10px 10px 0px 0px" + color }}
      className={styles.container}
    >
      <h4>{title}</h4>
      <p>{answer}</p>
    </div>
  );
};

export default FAQCard;
