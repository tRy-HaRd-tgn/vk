import { SliderProps } from "../../types/sliderProps";
import styles from "./styles.module.scss";
export const SliderItem = ({ name, url, key }: SliderProps) => {
  return (
    <div key={key}>
      <h3>{name}</h3>
      <a className={styles.a} href={url}>
        {url}
      </a>
    </div>
  );
};
