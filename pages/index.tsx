import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useWindowSize } from "../utils/helpers";
import SwiperAboutUs from "../components/SwiperAboutUs";
import AboutEvent from "../components/AboutEvent";
import SwiperBingoPrize from "../components/SwiperBingoPrize";
import BuyYourCardButton from "../components/BuyYourCardButton";

export default function Home() {
  const { isDesktop } = useWindowSize();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.HomeAssociationLogoContainer}>
          <Image
            src="/images/logo-associacao-768x282.png"
            alt="logo da associação"
            width={isDesktop ? 768 : 300}
            height={isDesktop ? 282 : 143}
          />
        </div>
        <div className={styles.HomeHeroContainer}>
          <h1 className={styles.HomeHeroTitle}>
            Venha Participar do Nosso Bingo Beneficente!
          </h1>
          <BuyYourCardButton />
        </div>
        <SwiperAboutUs />
        <BuyYourCardButton />
        <AboutEvent />
        <BuyYourCardButton />
        <SwiperBingoPrize />
        <BuyYourCardButton />
      </main>

      <footer className={styles.footer}>
        <h2>Olá footer</h2>
      </footer>
    </div>
  );
}
