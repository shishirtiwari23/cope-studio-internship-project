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
import { WhyCard, HowCard, FAQCard } from "../../components";
import { whyCardData, howCardData, FAQCardData } from "../../constants/data";

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
      <section className={styles.whoContainer}>
        <div className={styles.topContainer}>
          <div className={styles.who}>
            <h1>Who</h1>
            <img src={underline} alt="Underline" />
          </div>
          <div className={styles.imageContainer}>
            <img src={lookHere} alt="Look Here" />
          </div>
        </div>
        <h2>Who is the Fellowship for? </h2>
        <h4>
          Are you <span>self-taught</span> or did you attend a{" "}
          <span>bootcamp?</span>
          Do you have a <span>strong urge to create</span> something in the Web3
          space? Then this program is for you. We’re looking for{" "}
          <span>aspiring engineers</span> that have little to no technical job
          experience who are <span>eager to learn</span> as much as possible.
        </h4>
        <section className={styles.excuseGeneratorContainer}>
          <p>Lets’s get you started with our</p>
          <h1>Parents Excuse Generator</h1>
          <div className={styles.content}>
            <div className={styles.leftContainer}>
              <span>To: Your Parents</span>
              <div className={styles.divider}></div>
              <span>
                From: <input type="text" />
              </span>
              <div className={styles.divider}></div>
              <span>Subject: Goodbye</span>
              <span>Dearest Dad,</span>
              <span>
                I hereby let go of your dreams, being mine too. WAGMI.{" "}
              </span>

              <span>Ex animo,</span>
            </div>
            <div className={styles.rightContainer}>
              <h4>Customize your excuse to parents</h4>
              <span>Define your voice and tone</span>
              <div className={styles.slidersContainer}>
                <div className={styles.sliderContainer}>
                  <input id="calm" type="range" />
                  <div className={styles.labelsContainer}>
                    <label htmlFor="calm">Calm</label>
                    <label htmlFor="candid">Roadies</label>
                  </div>
                </div>
                <div className={styles.sliderContainer}>
                  <input id="candid" type="range" />
                  <div className={styles.labelsContainer}>
                    <label htmlFor="candid">Candid</label>
                    <label htmlFor="candid">Curry </label>
                  </div>
                </div>
              </div>
              <button>Share</button>
              <div className={styles.inputContainer}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your Name Here" />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Your Email Here" />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.FAQContainer}>
          <div className={styles.topContainer}>
            <div className={styles.who}>
              <h1>Faq</h1>
              <img src={underline} alt="Underline" />
            </div>
            <div className={styles.imageContainer}>
              <img src={commentBubble} alt="Comment Bubble" />
            </div>
          </div>
          <div className={styles.FAQsContainer}>
            {FAQCardData.map((item) => {
              return (
                <FAQCard
                  key={item.id}
                  title={item.title}
                  answer={item.answer}
                  color={item.color}
                ></FAQCard>
              );
            })}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
