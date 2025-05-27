import { SliderProps } from "../../types/sliderProps";
export const SliderItem = ({ name, url, key }: SliderProps) => {
  return (
    <div key={key}>
      <h3>{name}</h3>
      <a href={url}>{url}</a>
    </div>
  );
};
