import styles from "./styles.module.scss";
export const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.a} href="/result">
        Выполненное задание (нажми на меня!)
      </a>
      <a href="https://t.me/right_wing_it">
        <img className={styles.logo} src="./logo.jpg" alt="error" />
      </a>
    </header>
  );
};
