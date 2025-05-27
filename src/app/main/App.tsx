import { Header } from "../../components/header";
import styles from "./styles.module.scss";
import { Footer } from "../../components/footer";
function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.heading}>Тестовое задание вк</h1>
        <p className={styles.p}>
          <span>Используемый стек: </span>
          react, type script,shad cn, redux toolkit, axios, zod
        </p>
        <img className={styles.image} src="./logo.jpg" alt="" />
        <img
          style={{ animationDelay: "1s" }}
          className={styles.image}
          src="./vk.png"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
