import styles from "./HeroSection.module.css";
import { ReactComponent as VibratingHeadphone } from "../../assets/vibratingheadphone.svg";

const HeroSection = () => {
  const { container, typography, logo } = styles;

  return (
    <div className={container}>
      <h1 className={typography}>
        100 Thousand Songs, ad-free
        <br />
        Over thousands podcast episodes
      </h1>
      <VibratingHeadphone className={logo} alt="Headphone image" />
    </div>
  );
};

export default HeroSection;
