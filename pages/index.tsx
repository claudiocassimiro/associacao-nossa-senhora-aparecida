import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useWindowSize } from "../utils/helpers";
import SwiperAboutUs from "../components/SwiperAboutUs";
import AboutEvent from "../components/AboutEvent";
import SwiperBingoPrize from "../components/SwiperBingoPrize";
import BuyYourCardButton from "../components/BuyYourCardButton";
import Head from "next/head";
import { GiPartyPopper } from "react-icons/gi";
import { GrStatusGood } from "react-icons/gr";
import { FaChild, FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

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

        <div className={styles.HomeContainerMoreInfos}>
          <Image
            src="/images/logo-associacao-768x282.png"
            alt="logo da associação"
            width={260}
            height={120}
          />
          <div className={styles.HomeContainerInfos}>
            <span className={styles.HomeContainerIconAndText}>
              <GiPartyPopper size="20" />
              <p className={styles.HomeInfoText}>
                Venha fazer parte da nossa festa!
              </p>
            </span>
            <span className={styles.HomeContainerIconAndText}>
              <GrStatusGood size="20" />
              <p className={styles.HomeInfoText}>Bingo Beneficente</p>
            </span>
            <span className={styles.HomeContainerIconAndText}>
              <FaChild size="20" />
              <p className={styles.HomeInfoText}>
                Festa das Crianças e Natal Solidário
              </p>
            </span>
            <span className={styles.HomeContainerIconAndText}>
              <HiLocationMarker size="20" />
              <p className={styles.HomeInfoText}>Chácara do Gaúcho</p>
            </span>
            <span className={styles.HomeContainerIconAndText}>
              <FaPhoneAlt size="15" />
              <p className={styles.HomeInfoText}>(81) 81- 99177-5580</p>
            </span>
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <h2>Olá footer</h2>
      </footer> */}
    </div>
  );
}
