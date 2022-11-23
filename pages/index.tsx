import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useWindowSize } from "../utils/helpers";
import SwiperAboutUs from "../components/SwiperAboutUs";
import AboutEvent from "../components/AboutEvent";
import SwiperBingoPrize from "../components/SwiperBingoPrize";
import BuyYourCardButton from "../components/BuyYourCardButton";
import Head from "next/head";

export default function Home() {
  const { isDesktop } = useWindowSize();

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Associação Nossa Senhora Aparecida - Venha Participar Do Nosso Bingo
          Beneficente!
        </title>
        <meta name="description" content="Associação para fins Beneficentes" />
        <link rel="icon" href="/favicon.png" />
      </Head>
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
