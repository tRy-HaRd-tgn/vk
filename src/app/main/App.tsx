import { Header } from "../../components/header";
import styles from "./styles.module.scss";
import { Footer } from "../../components/footer";
import logo from "../../../public/logo.jpg";
import vk from "../../../public/vk.png";
function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.heading}>Тестовое задание вк</h1>
        <p className={styles.p}>
          <span>Используемый стек: </span>
          react, type script,shad cn, redux toolkit, axios, zod, react-hook-form
        </p>
        <img className={styles.image} src={logo} alt="" />
        <img
          style={{ animationDelay: "1s" }}
          className={styles.image}
          src={vk}
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
