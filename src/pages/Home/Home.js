import styles from "./Home.module.scss";
import logo from "../../assets/images/logo.svg";
import flower from "../../assets/images/flower.svg";
import sandeep from "../../assets/images/sandeep.svg";
import smiley from "../../assets/images/smiley.svg";
import underline from "../../assets/images/underline.svg";
import wondering from "../../assets/images/wondering.svg";
import commentBubble from "../../assets/images/commentBubble.svg";
import fellowshipWelcome from "../../assets/images/fellowshipWelcome.svg";
import lookHere from "../../assets/images/lookHere.svg";
import { WhyCard, HowCard } from "../../components";
import { whyCardData, howCardData } from "../../constants/data";

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.heroContainer}>
        <header>
          <div className={styles.imageContainer}>
            <img src={logo} alt="Logo" />
          </div>
          <div className={styles.centerContent}>
            <h4>Sandeep Nailwal</h4>
            <p>Fellowship</p>
          </div>
        </header>
        <section className={styles.mainLine}>
          <h1>I'll pay you $50,000 to build your wildest web3 idea</h1>
        </section>
        <section className={styles.whatContainer}>
          <div className={styles.imagesContainer}>
            <div className={styles.imageContainer}>
              <img src={flower} alt="Flower" />
            </div>
            <div className={styles.centerContainer}>
              <div className={styles.imageContainer}>
                <img src={sandeep} alt="Sandeep" />
              </div>
              <div className={styles.textContainer}>
                <h1>What</h1>
                <img src={underline} alt="Underline" />
              </div>
            </div>
            <div className={styles.imageContainer}>
              <img src={smiley} alt="Smiley" />
            </div>
          </div>
          <div className={styles.textContainer}>
            <h4>
              Founded by technology entrepreneur and investor{" "}
              <span>Sandeep Nailwal,</span>
              the Nailwal Fellowship is a program for{" "}
              <span>young builders</span> who want to create new things. The
              Nailwal Fellowship provides a grant <span>upto $50,000</span> and{" "}
              <span>support from a network</span> of founders, investors and
              developers to accelerate our collective{" "}
              <span>vision for the future of the web.</span>
            </h4>
          </div>
        </section>
        <section className={styles.whyContainer}>
          <div className={styles.why}>
            <h1>Why</h1>
            <img src={underline} alt="Underline" />
          </div>
          <div className={styles.cardsContainer}>
            {whyCardData.map((item) => {
              return (
                <WhyCard
                  color={item.color}
                  description={item.description}
                  serialNo={item.serialNo}
                  image={item.image}
                  key={item.serialNo}
                >
                  {item.heading}
                </WhyCard>
              );
            })}
          </div>
        </section>
      </section>
      <section className={styles.howContainer}>
        <div className={styles.topContainer}>
          <div className={styles.how}>
            <h1>how</h1>
            <img src={underline} alt="Underline" />
          </div>
          <div className={styles.imageContainer}>
            <img src={wondering} alt="Wondering" />
          </div>
        </div>
        <h4>How does the Nailwal Fellowship work?</h4>
        {howCardData.map((item) => {
          return (
            <HowCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              color={item.color}
              listItem={item.listItem}
            ></HowCard>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
