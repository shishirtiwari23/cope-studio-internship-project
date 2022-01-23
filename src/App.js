import styles from "./App.module.scss";
import { Home } from "./pages";

const App = () => {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
};

export default App;
