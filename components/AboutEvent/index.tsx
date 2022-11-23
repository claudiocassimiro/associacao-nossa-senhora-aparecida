import { handleImageSize } from "../../utils/helpers";
import styles from "./styles.module.css";

export default function AboutEvent() {
  return (
    <div className={styles.HomeAboutEventContainer}>
      <h2 className={styles.HomeAboutEventTitle}>Sobre o Evento</h2>
      <video
        src="https://associacao.servicoscartorarios.com.br/wp-content/uploads/2022/10/IMG_3452.mov"
        controls
        controlsList="nodownload"
        width={handleImageSize().width}
        height={handleImageSize().height}
      />
    </div>
  );
}
